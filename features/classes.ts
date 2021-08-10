export { }
class Vehicle {
    // color:string                     // 1st way
    // constructor(color:string){
    //     this.color= color;
    // }

    constructor(public color: string) { } // 2nd way

    protected honk(): void {
        console.log("beep");
    }
}

class Car extends Vehicle {             // Inheritence

    constructor(public wheels: number, color: string) {
        super(color)
    }

    private drive(): void {
        console.log('vroom');
    }
    startDrivingProcess(): void {        // Private can be called only in same class
        this.drive();
        this.honk()                     // Protected can be called in same class and child classes
    }
}

const car = new Car(4,'red');
// car.drive()                          // Cant be called because its private
car.startDrivingProcess();

const vehicle = new Vehicle('orange');