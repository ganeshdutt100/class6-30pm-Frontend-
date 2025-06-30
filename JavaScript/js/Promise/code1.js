//  padding - 1
//  Fulfilled - 2
//  Rejected - 3


let promise  = new Promise((resolve , reject)=>{
    let success = false ;

    if(success){
        resolve("Task Done!")
    }else{
        reject("Something went wrong")
    }
})

promise
.then((result)=>console.log(result))
.catch((error)=>console.log(error))
