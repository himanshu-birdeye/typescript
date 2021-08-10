const drink = {
    color:'brown',
    carbonated: 'true',
    sugar: 40
}

const pepsi: [string, boolean, number] = ['brown', true, 45];
// pepsi[0] = 45;                       // error

type Drink = [string, boolean, number];            // defining a type
const Coke: Drink = ['brown', true, 48];