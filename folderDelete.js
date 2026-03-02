const fs=require('fs');
if (fs.existsSync('myFolder')) {
fs.rmdir('myFolder',(err)=>{
    if(err){
        console.log(err);}  
    console.log('folder deleted');
    })
}
    else{
  fs.mkdir('myFolder',(err)=>{
    if(err){
        console.log(err);}   
    console.log('folder created');
    })
    }



