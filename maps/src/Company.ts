import faker from 'faker';
import {Mappable} from "./CustomMap"

export class Company implements Mappable {     // Implements: For better error identification
    companyName: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number
    }
    place = "Company";

    constructor() {
        this.companyName = faker.company.companyName(),
        this.catchPhrase = faker.company.catchPhrase(),
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `Company name is : ${this.companyName}`;
    }
}