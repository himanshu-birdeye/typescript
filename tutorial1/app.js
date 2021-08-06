"use strict";
exports.__esModule = true;
var a = "hello TS"; // error if value is not string
console.warn(a);
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.test = function () {
        console.warn("class testing in typescript");
    };
    return App;
}());
var a1 = new App();
a1.test();
