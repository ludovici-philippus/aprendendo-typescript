let greet: Function;

greet = (): void => {
  console.log("Hello, world!");
}

const add = (num1: number, num2: number, num3?: number | string, num4: number = 10) : number => { 
  return num1 + num2;
}

console.log(add(5, 10, 3));

const minus = (a: number, b: number) : number => {
  return a - b;
}

let result = minus(5, 3);
console.log(result);
