const express = require("express");
const app = express();

app.use((req, res, next) => {
    console.log("Middleware Running...");
   console.log(req.url);
   console.log(req.method);
    next();
    
});

app.get("/", (req, res) => {
    res.send("Home Page");
});
app.get("/about", (req, res) => {
    res.send("about Page");
});
app.use((req,res)=>{
    res.send("404 page")
})
app.listen(3000);