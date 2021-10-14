import {firebase} from "./config";

type ServiceTable = {
    serviceDetails: {
        company: Record<string, { resourcesAllocated: number }>;
        serviceIcon: string;
        serviceName: string;
      };
      serviceId: string | null;
}[];

class DataBase {
    database: firebase.database.Database;
    serviceTable: ServiceTable;
    
    constructor() {
        this.database = firebase.database();
        this.serviceTable = [];
    }

    /**
     * @return Promise<any returns the fetched data from the services object in firebase 
     * reference this function as such: database.readServices().then((data) => {setServices(data);})
     */
    async readServices(): Promise<ServiceTable> {
        const serviceRef = this.database.ref('/services')
        await serviceRef.once('value', (snapshot) => {
            snapshot.forEach((child) => {
                const serviceId = child.key;
                const serviceDetails = child.val()
                this.serviceTable.push({ serviceId, serviceDetails })
            })
        }, (errorObject: { name: string; }) => {
            console.log('The read failed: ' + errorObject.name);
        });
        return this.serviceTable;
    }
}

export const database = new DataBase();
export { ServiceTable };
