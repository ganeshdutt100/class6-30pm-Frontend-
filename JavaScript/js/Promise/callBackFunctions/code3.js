// function-1
function getData(callback){
    console.log("Fetching Data..");
    callback("data from server ");
    
}
// function-2
function processData(data, callback){

   setTimeout(()=>{
    console.log("Processing data...");
    callback(data + "Processed");
    
   },1000)
    
}

// function 3

function saveData(result, callback){

   setTimeout(()=>{
    console.log("save data...");
    callback(result + "saved");
    
   },1000)
    
}


//  callback hell style


getData(function(data){
  processData(data,function(result){
    saveData(result,function(response){
        console.log("Final output " ,response );
        console.log("Done ");
        
        
    })
  })
})