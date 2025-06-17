// let a = "Ganesh Dutt";
// let a1 = "Ganesh Dutt";

// let newStr = 'ganesh '
// let newStr1 = "dutt"

// let str = `Ganesh
// dutt
// `;
// console.log(str);

let str1 = " ganesh Dutt ";
let str2 = "apple , banana , orange";

// let output = str1.length;
// let output = str1[0];
// let output = str1.substring(0, 6);
// let output = str2.split(" , ");
// let output = str1.concat(" , ", str2);
// let output = str1.toUpperCase();
// let output = str1.toLowerCase();
// let output = str1.length;
// let output = str1.trim();
// let output1 = output.length;
// let output = str1.indexOf("n");

// let output = str2.replace("a", "o");
// let output = str2.replace(/a/g, "o");

// console.log(output);

// let str = `Hello ${str1}`;
// console.log(str);
let str = "aditi Manchanda";
let titleCaseStr = str
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
 
console.log(titleCaseStr); // Output: "Aditi Manchanda"
 