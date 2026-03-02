const fs=require("fs");
fs.readFile("components/Test.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }   else{     console.log(data);
    }

})