
let promise  = new Promise((resolve , reject)=>{
    let success = true ;

    if(success){
        resolve("Task Done!")
    }else{
        reject("Something went wrong")
    }
})

promise
.then((x)=>console.log(x))
.catch((error)=>console.log(error))

