import {firebase} from "./config";

class DataBase {
    database: firebase.database.Database;
    serviceTable: any;

    constructor() {
        this.database = firebase.database();
        this.serviceTable = [];
    }

    /**
     * @return Promise<any returns the fetched data from the services object in firebase 
     * database.readServices().then((data) => {setServices(data);})
     */
    async readServices(): Promise<any> {
        const serviceRef = this.database.ref('/services')
        await serviceRef.once('value', (snapshot) => {
            snapshot.forEach((child) => {
                const serviceID = child.key;
                const serviceDetails = child.val()
                this.serviceTable.push({ serviceID, serviceDetails })
            })
        }, (errorObject: { name: string; }) => {
            console.log('The read failed: ' + errorObject.name);
        });
        return this.serviceTable;
    }
}

export const database = new DataBase();