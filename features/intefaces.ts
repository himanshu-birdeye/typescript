interface Vehicle {
    name: string;
    year: Date;
    broken: boolean;
    summary():string;
}

const oldScoda = {
    name: "Scoda",
    year: new Date(),
    broken: true,
    summary():string {
        return `Name is ${this.name}`;
    }
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(vehicle.summary);
}

printVehicle(oldScoda);