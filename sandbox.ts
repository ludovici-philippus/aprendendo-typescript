// Explicit types
let character: string;
let age: number;
let isLoggedIn: boolean;

age = 20;
isLoggedIn = true;
character = "Olá, mundo";

// Arrays
let ninjas: string[] = [];
ninjas = ["Mario", "Yoshi"];

// Union types
let mixed: (string | number)[] = [];
mixed.push("Hello");
mixed.push(20);
console.log(mixed);

let uid: string|number;
uid = "123";
uid = 123;

// Objects
let ninjaOne: object;
ninjaOne = { name: "Yoshi", age: 30 };

let ninjaTwo: {
  name: string,
  age: number,
  beltColour: string
};

ninjaTwo = {
  name: "Ryu",
  age: 30,
  beltColour: "Black"
};

console.log(ninjaOne);
console.log(ninjaTwo);

