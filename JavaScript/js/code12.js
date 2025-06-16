let obj = {
  length: 3,
  0: "Rahul 1.0",
  1: "Rahul1.1",
  2: "Rahul1.2",
};

let output = Array.from(obj);
console.log(output);

let newArr = Array.of("Rahul1.0", "Rahul1.1", "Rahul1.2");
console.log(newArr);
