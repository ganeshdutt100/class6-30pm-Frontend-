document.writeln("Apply method");

// apply("null" , arr)

let a = [23, 56, 78, 90, 34, 23];

let max = Math.max.apply(this, a);
console.log(max);
let min = Math.min.apply(this, a);
console.log(min);

// const students = {

// }

// const person = {
//   name: "John",
//   age: 30,
// };
