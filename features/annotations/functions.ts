const add = (a: number, b:number ): number =>{
    // return "bdhbf";     // error
    showWeather({ data: new Date(), weather:"sunny"});
    return a+b;
    
}
const showWeather = ({data, weather}:{data: Date, weather: string}):void => { // showing error if we "data" -> "date" ????
    console.log(data, weather);
}