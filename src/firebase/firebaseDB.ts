import { Alert } from "react-native";
import { firebase } from "./config";

type ServiceListType = {
  companyDetails: Record<string, { resourcesAllocated: number }>[];
  serviceId: string | null;
  serviceName: string | null;
  serviceIcon: string | null;
}[];

type userInfoType = {
  userID: string | undefined | null;
  userEmail: string | undefined | null;
  userName: string | undefined | null;
  userPhone: string | undefined | null;
  userAddress: {
    street: string | undefined | null;
    city: string | undefined | null;
    state: string | undefined | null;
    zip: string | undefined | null;
  };
};

class DataBase {
  database: firebase.database.Database;
  serviceTable: ServiceListType;
  surveyTable: any;

  constructor() {
    this.database = firebase.database();
    this.serviceTable = [];
    this.surveyTable = [];
  }

  /**
   * @return Promise<ServiceListType> returns the fetched data from the services object in firebase
   * reference this function as such: database.readServices().then((data) => {setServices(data);})
   */
  async readServices(): Promise<ServiceListType> {
    const serviceRef = this.database.ref("/services");
    this.serviceTable = [];
    await serviceRef.once(
      "value",
      (snapshot) => {
        snapshot.forEach((child) => {
          const serviceId = child.key;
          const serviceName = child.val().serviceName;
          const serviceIcon = child.val().serviceIcon;
          const companyDetails = child.val().company;
          this.serviceTable.push({
            serviceId,
            serviceIcon,
            serviceName,
            companyDetails,
          });
        });
      },
      (errorObject: { name: string }) => {
        console.log("The read failed: " + errorObject.name);
      }
    );
    return this.serviceTable;
  }

  /**
   * @returns {Promise<void>} requests the data from the survey object in firebase
   */
  async getSurveyQuestions(): Promise<any> {
    const surveyRef = this.database.ref("/consumerSurvey");
    this.surveyTable = [];
    await surveyRef.once(
      "value",
      (snapshot) => {
        snapshot.forEach((child) => {
          const question = child.val();
          this.surveyTable.push({ question });
        });
      },
      (error) => {
        console.log(error);
      }
    );
    return this.surveyTable;
  }

  async updateUserObject(userInfo: userInfoType) {
    const userRef = this.database.ref("/users/" + userInfo?.userID);
    await userRef
      .set({
        userEmail: userInfo?.userEmail,
        userName: userInfo?.userName,
        userPhone: userInfo?.userPhone,
        userAddress: {
          street: userInfo.userAddress?.street,
          city: userInfo.userAddress?.city,
          state: userInfo.userAddress?.state,
          zip: userInfo.userAddress?.zip,
        },
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          Alert.alert("Oops", "Email Taken", [{ text: "Try Again" }]);
        } else {
          Alert.alert("Error", "Something Went Wrong", [{ text: "Try Again" }]);
        }
      });
  }

  /**
   *
   */
  async updateSurvey(surveyAnswered: any) {
    const surveyRef = this.database.ref(
      "/transaction/" + this.generateUniqueId() + "/survey/"
    );
    surveyAnswered.array.forEach(async (survey: any) => {
      await surveyRef.set({
        question: survey.question,
        answer: survey.answer,
      });
    });
  }

  /**
   * Generates a 16 digit unique ID
   */
  generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 16);
  }
}

export const database = new DataBase();
export { ServiceListType, userInfoType };
