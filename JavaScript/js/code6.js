// document.writeln("Code 6");
// Declarations----------------
// function myFunction() {
//   let a = 20;
//   let b = 30;
//   console.log(a + b);
// }
// myFunction();

// function fun(a, b) {
//   return console.log(a + b);
// }

// fun(10, 34);
// fun(10, 98);

// expression-------------------
// let output = function () {
//   console.log("Hello world");
// };

// output();

// let userValue = function() {
//   let input = prompt("Enter your name ");
//   console.log(input);
// };

// userValue();

// IIFE--------------------

// (function () {
//   console.log("i am IIFE function");
// })();

// Arrow Function

// let arrowFun = () => console.log("Hello world");
// let arrowFun = () => {
//   console.log("Hello world");
//   console.log("Hello world 2");
// };
// arrowFun();

// function methods

// function printName(name) {
//   console.log("Hello " + name);
// }
// printName.call(null, "John");

function Emp(id, name) {
  this.id = id;
  this.name = name;
}
// id = 1
function PerEmp(id, name, salary) {
  Emp.call(this, id, name);
  this.salary = salary;
}
function TmpEmp(id, name) {
  Emp.call(this, id, name);
}

let emp1 = new PerEmp(1, "ganesh", "XYZ");
let emp2 = new TmpEmp(2, "Krishna");

console.log(emp1);
console.log(emp2);

// sakshi rana  👈 this
// sakshi rana
