 new Promise((resolve,reject)=>{
    setTimeout(() =>{
 resolve(1)
    },1000)
}).then((result)=>{
    console.log("First Data : "+ result)
    return result+1
}).then((result)=>{
    console.log("Second Data : "+result)
    return result+1
}).then((result)=>{
    console.log("Third Data : "+result);
    
}).catch((err)=>console.log(err))
