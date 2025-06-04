document.writeln("Apply method");

// apply("null" , arr)

// let a = [23, 56, 78, 90, 34, 23];

// let max = Math.max.apply(this, a);
// console.log(max);
// let min = Math.min.apply(this, a);
// console.log(min);

// const student = {

//   fullName: function (city, country) {
//     return this.name + " " + this.last + " from  " + city + " , " + country;
//   },
// };

// const person = {
//   name: "Ganesh",
//   last: "Dutt",
// };
// console.log(student.fullName.apply(person, ["mathura", "India"]));

// bind(null, [arg[arg[arg]]])

// let web = {
//   name: "Tailwind",
//   getName: function () {
//     return this.name;
//   },
// };

// let webName = {
//   name: "javaScript",
// };

// let firstValue = web.getName;
// console.log(firstValue);

// let output = firstValue.bind(webName);
// console.log(output());

let a = 34;
console.log(typeof a.toString());
