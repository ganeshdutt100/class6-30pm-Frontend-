function myCallBack(){
    console.log("Call back function is executed");
    
}


function runAsync(callback){
    console.log("Start Async Task");
    
    setTimeout(()=>{
        callback()
    },3000)

    console.log("End Async Task");

}
runAsync(myCallBack)

// function runSync(callback){
//  console.log("Start Sync fun")
//  callback();
//  console.log("End Sync fun")

// }
// runSync(myCallBack)
// console.log("1");
// console.log("2");
// console.log("3"); // 2sec 
// console.log("4");
// console.log("5");







