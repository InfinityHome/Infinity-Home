import {firebase} from "./config";

class DataBase {
    database: firebase.database.Database;

    constructor() {
        this.database = firebase.database();
    }

    readDatabase(table: string) {
        const tableRef = this.database.ref(table);
        tableRef.on('value', (snapshot) => {
            console.log(snapshot.val());
        }, (errorObject: { name: string; }) => {
            console.log('The read failed: ' + errorObject.name);
        });
    }

}

export const database = new DataBase();