const carMakers = ['maruti', 'honda', 'kia']; //type inference

const cars: string[] = [];                   // type annotations required
cars.push('creta', 'seltos');

const vehicles = [                           //type inference
    ['alto', 'brezza'],
    ['creata', 'venue']
];

const vehiclesArray: string[][] = [];        //type annotations

// for flixible types in array
const importantDates: (string | Date)[] = [new Date(), '18-11-1997']; 
