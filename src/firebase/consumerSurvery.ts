import { firebase } from "./config";

class consumerSurvey {
  database: firebase.database.Database;
  surveyTable: any;

  constructor() {
    this.database = firebase.database();
    this.surveyTable = [];
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

  /**
   *
   */
  async updateSurvey(surveyAnswered: any) {
    const surveyRef = this.database.ref(
      "/transaction/" + surveyAnswered.conversationId + "/survey/"
    );
    surveyAnswered.array.forEach(async (survey: any) => {
      await surveyRef.set({
        question: survey.question,
        answer: survey.answer,
      });
    });
  }
}

export const cS = new consumerSurvey();
// export { dataTypes };
