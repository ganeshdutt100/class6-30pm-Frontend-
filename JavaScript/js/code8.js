document.writeln("code 8");

// for loop
// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i + " Ganesh Dutt");
// }
// document.writeln("<br>");

// let table = 5;

// for (let i = 1; i <= 10; i++) {
//   document.writeln(table + " * " + i + " = " + table * i + "<br>");

//   //   console.log();
// }

//  table * i = tbale*i

//  2 * 1 = 2
//  2 * 2 = 4

// table
// 2*1 = 2
// 2*2 = 4
// 2*3 = 6
// .
// .
// .
// .

// while
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// Do While Loop

// let i = 20;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// let a = [12, 35, 678, 90];
// // console.log(a);
// for (let x of a) {
//   console.log(x + 10);
// }

let obj = {
  name: "Ganesh Dutt",
  address: "Mathura",
};

// console.log(obj.address);

for (let x in obj) {
  console.log(x + " : " + obj[x]);
}
