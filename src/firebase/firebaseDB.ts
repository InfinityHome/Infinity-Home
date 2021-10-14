import {firebase} from "./config";

type ServiceListType = {
    companyDetails: Record<string, { resourcesAllocated: number }>;
    serviceId: string | null;
    serviceName: string | null;
    serviceIcon: string | null;
}[];

class DataBase {
    database: firebase.database.Database;
    serviceTable: ServiceListType;
    
    constructor() {
        this.database = firebase.database();
        this.serviceTable = [];
    }

    /**
     * @return Promise<any returns the fetched data from the services object in firebase 
     * reference this function as such: database.readServices().then((data) => {setServices(data);})
     */
    async readServices(): Promise<ServiceListType> {
        const serviceRef = this.database.ref('/services')
        await serviceRef.once('value', (snapshot) => {
            snapshot.forEach((child) => {
                const serviceId = child.key;
                const serviceName = child.val().serviceName;
                const serviceIcon = child.val().serviceIcon;
                const companyDetails = child.val().company;
                this.serviceTable.push({ serviceId, serviceIcon, serviceName, companyDetails })
            })
        }, (errorObject: { name: string; }) => {
            console.log('The read failed: ' + errorObject.name);
        });
        return this.serviceTable;
    }
}

export const database = new DataBase();
export { ServiceListType };
