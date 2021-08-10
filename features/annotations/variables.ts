const apples = 5                        //type inference
let nothingMuch: null = null;           //type annotation
let nothing: undefined = undefined;

// Objects
let todayDate: Date = new Date();

// Array
let colors: string[] = ['red', 'yellow', 'pink'];

// Class
class Car {

}
let car: Car = new Car();

// Objects literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// Functions
const logNumber: (i: number) => void = (i) => {
    console.log(i);
}

// Example where to use type annotaion
//1
const json = '{"x":10 , "y":20}';
// const coordinate = JSON.parse(json);      // coordinate has type:any
const coordinate: {x: number ; y:number} = JSON.parse(json);

//2
let alpha:string; 
alpha = "xyz";      //when setting value in different line, inference wont work


//3
let numberGreaterThanZero: boolean | number = false;
numberGreaterThanZero = 50;
