// const http=require('http');
// const server=http.createServer((req,res)=>{
//     res.write("<h1>Server Running on port 3000</h1>")
//     res.end();
// });
// server.listen("3000",()=>{console.log("server is running on port 3000")})

const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    fs.readFile('./localserverresponse.html',(err,data)=>{
        if (err){console.log(" internal Server error"),res.end()}
        else {res.write(data);
            res.end();
        }
    })
   
});
server.listen("3000",()=>{console.log("server is running on port 3000")})