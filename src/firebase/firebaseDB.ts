import { firebase } from './config';

class DataBase {
  database: firebase.database.Database;

  constructor() {
    this.database = firebase.database();
  }

  readDatabase(table: string, uid: string | undefined):any {
    const tableRef = this.database.ref(`/${table}/${uid}`);
    console.log('Here');
    tableRef.on(
      'value',
      (snapshot) => {
        console.log("FIREBASEDB", snapshot.val());
      },
      (errorObject: { name: string }) => {
        console.log('The read failed: ' + errorObject);
      }
    );
  }
}

export const database = new DataBase();
