const express = require("express");
const app = express();
const path=require("path");
// app.set("views","./view");
// app.set("view engine","ejs");
app.use((req, res, next) => {
    console.log("Middleware Running...");
   console.log(req.url);
   console.log(req.method);
    next();
    
});

app.get(["/","/home","/homepage"], (req, res) => {
    // res.send("Home Page");
    // res.sendFile(__dirname +"/view/home.html");
    res.sendFile(path.join(__dirname,"view","home.html"));
// 
// res.render("home")
});
app.get("/about", (req, res) => {
    // res.send("about Page");
    //  res.sendFile(__dirname +"/view/about.html");
      res.sendFile(path.join(__dirname,"view","about.html"));
    // res.render('about')
});
app.get("/about-usPage", (req, res) => {
    res.redirect("/about");
});
app.use((req,res)=>{
    // res.send("404 page")
     res.sendFile(__dirname +"/view/404.html");
    // res.render("404")
})
app.listen(3000);