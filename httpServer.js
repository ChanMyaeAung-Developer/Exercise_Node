const http=require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
   let fileName;

   switch(req.url){
    case '/':
        fileName='home.html';
        res.statusCode=200;
        
        break;
 case '/home': 
        res.statusCode=301;
        res.setHeader("Location","/");
      res.end();
        break;
    case '/about':
        fileName='about.html';
        break;
        case '/about-us': 
        res.statusCode=301;
        res.setHeader("Location","/about");
        res.end();
        break;
        
    default:
        fileName='404.html';
   }
            fs.readFile('components/'+fileName,(err,data)=>{
                if(err){
                    res.writeHead(500);
                    res.end('Internal Server Error');
                }else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end();
                }
            });
        
    
});
server.listen(3000,()=>{
    console.log('server is running on port 3000');
});