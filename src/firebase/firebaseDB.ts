import { Alert } from 'react-native';
import { firebase } from './config';

type ServiceListType = {
  companyDetails: Record<string, { resourcesAllocated: number }>[];
  serviceId: string | null;
  serviceName: string | null;
  serviceIcon: string | null;
  serviceColor: string | null;
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

type contractorInfoType = {
    contractorID: string | undefined | null;
    contractorEmail: string | undefined | null;
    contractorName: string | undefined | null;
    contractorPhone: string | undefined | null;
    contractorLicense: string | undefined | null;
    contractorAddress: {
        street: string | undefined | null,
        city: string | undefined | null,
        state: string | undefined | null,
        zip: string | undefined | null,
    }; 
}

class DataBase {
  database: firebase.database.Database;
  serviceTable: ServiceListType;

  constructor() {
    this.database = firebase.database();
    this.serviceTable = [];
  }

  /**
   * @return Promise<ServiceListType> returns the fetched data from the services object in firebase
   * reference this function as such: database.readServices().then((data) => {setServices(data);})
   */
  async readServices(): Promise<ServiceListType> {
    const serviceRef = this.database.ref('/services');
    this.serviceTable = [];
    await serviceRef.once(
      'value',
      (snapshot) => {
        snapshot.forEach((child) => {
          const serviceId = child.key;
          const serviceName = child.val().serviceName;
          const serviceIcon = child.val().serviceIcon;
          const serviceColor = child.val().serviceColor;
          const companyDetails = child.val().company;
          this.serviceTable.push({
            serviceId,
            serviceIcon,
            serviceName,
            companyDetails,
            serviceColor,
          });
        });
      },
      (errorObject: { name: string }) => {
        console.log('The read failed: ' + errorObject.name);
      }
    );
    return this.serviceTable;
  }

  async updateUserObject(userInfo: userInfoType) {
    const userRef = this.database.ref('/users/' + userInfo?.userID);
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
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Oops', 'Email Taken', [{ text: 'Try Again' }]);
        } else {
          Alert.alert('Error', 'Something Went Wrong', [{ text: 'Try Again' }]);
        }
      });
  }
}

export const database = new DataBase();
export { ServiceListType, userInfoType };
