const profile = {
    name: "Himanshu",
    age: 23,
    coordinate: {
        lat: 21,
        long: 33
    },
    setAge(age: number): void {
        this.age = age;
    }
};

const { age }: { age: number } = profile;
const { 
    coordinate: { lat, long } 
}: { coordinate: { lat: number, long: number } } = profile;

