// let promise1 = Promise.resolve("One")
// let promise2 = Promise.resolve("Two")

// Promise.all([promise1,promise2])
// .then((result) => {
//     console.log("All Promises Fulfilled");
//     console.log(result)
// })
// .catch((err)=>{console.log(err)})

// let myPromise = Promise.all([
//     new Promise(resolve => setTimeout(resolve(1)),3000),
//     new Promise(resolve => setTimeout(resolve(2)),1000),
//     new Promise(reject => setTimeout(reject("Error ")),2000)


// ])
// myPromise.then(alert)
// let myPromise = Promise.race([
//     new Promise(reject => setTimeout(reject("Error ")),1000),

//     new Promise(resolve => setTimeout(resolve(1)),1000),
//     new Promise(resolve => setTimeout(resolve(2)),1000),


// ])
// myPromise.then(alert)



let myPromise = Promise.any([
    new Promise((resolve,reject)=>setTimeout(reject(new Error("Error 1")),1000)),
    new Promise((resolve,reject)=>setTimeout(resolve(1)),2000),
    new Promise((resolve,reject)=>setTimeout(resolve(2)),1000),




])
myPromise.then(alert)