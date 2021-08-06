export {}
let a:string = "hello TS"; // error if value is not string
console.warn(a);

class App {
    test (){
        console.warn("class testing in typescript")
    }
}
let a1 = new App();
a1.test()