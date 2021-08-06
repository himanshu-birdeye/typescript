var apples = 5; //type inference
var nothingMuch = null; //type annotation
var nothing = undefined;
// Objects
var todayDate = new Date();
// Array
var colors = ['red', 'yellow', 'pink'];
// Class
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Objects literal
var point = {
    x: 10,
    y: 20
};
// Functions
var logNumber = function (i) {
    console.log(i);
};
// Example where to use type annotaion
//1
var json = '{"x":10 , "y":20}';
// const coordinate = JSON.parse(json);      // coordinate has type:any
var coordinate = JSON.parse(json);
//2
var alpha;
alpha = "xyz"; //when setting value in different line, inference wont work
//3
var numberGreaterThanZero = false;
numberGreaterThanZero = 50;
