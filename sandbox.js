// arrays
var names = ["luigi", "mario", "yoshi"];
names.push("toad");
console.log(names);
var numbers = [10, 20, 30, 40];
numbers.push(50);
console.log(numbers);
var mixed = ["Ken", 4, "Chun-Li", 8, 9];
mixed.push("Ryu");
mixed.push(10);
console.log(mixed);
// Objects
var ninja = {
    name: "Mario",
    belt: "Black",
    age: 30
};
console.log(ninja);
ninja.age = 20;
ninja.name = "Ryu";
//ninja.age = '30' Can't be done;
//ninja.skills = ["fighting", "sneaking"] Can't be done;
ninja = {
    name: "Yoshi",
    belt: "Orange",
    age: 40
};
// Can be done, whilst it keep the same properties from the original object;
