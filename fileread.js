const fs=require("fs");
const randomNumber=require('lodash');
fs.readFile("components/Test.txt","utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }   else{     console.log(data);
        console.log(randomNumber.random(100))
    }

})