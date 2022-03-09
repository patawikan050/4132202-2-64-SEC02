// es6-object.js
let cars = { 
    brand: "Toyota", 
    color: "red", 
    year: 2010, 
    fullName: function(){
        return `${this.brand} : ${this.year}`;
    },
    FullNameA: () => {
        return `${cars.brand} : ${cars.year}`;
    },
};

cars.color = "blue";
console.log(cars.color);

const x = cars;
x.year = 2020;
console.log(cars.year);

console.log(cars.fullName());

// destructuring
const number = [10,20,30];
const [a,b] = number;
console.log(b,a);

const {brand,color,year,FullNameA}= cars;
console.log(year);
console.log(FullNameA());