document.writeln("code 3");

// let nullValue = null;
// let value;

// console.log(nullValue);

// let a = 43928382949384838483483984839849n;
// console.log(a);

// Number;
// null;

// String;
// Symbol;

// Boolean;
// BigInt;

// undefined;

// let personName = "Ganesh Dutt";

// Object
// let person = {
//   name: "john",
//   age: 24,
// };

// console.log(person.name);
// console.log(person.age);

// 2 Array
// let arr = [3, 5, "Ganesh Dutt"];

// console.log(arr);

// 3 function
// function fun(a, b) {
//   return console.log(a + b);
// }
// fun(10, 67);

// let currentDate = new Date();
// console.log(currentDate);

// let value;

// let value2 = null;

// let newValue = Symbol("hello");
// console.log(newValue);

// let person = {
//   name: "john",
//   data: [newValue],
// };

// console.log(person.data);

// let a = Symbol("test");
// let b = Symbol("test");

// console.log(a == b);

let id = Symbol("id");

const user = {
  name: "John",
  age: 30,
  [id]: 123,
};

for (let key in user) {
  console.log(key);
}
// console.log(JSON.stringify(user));
console.log(user[id]);

let a = 90;

let output = a >= 50 ? true : false;
console.log(output);

// (condition)?true:false
