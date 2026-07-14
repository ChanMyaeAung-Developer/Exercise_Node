const fs=require('fs');
const txt="hello";
fs.writeFile("./filewriteTest.html",txt,(err)=>{
    if(err){
        console.log('Error in file writing');
    }
})