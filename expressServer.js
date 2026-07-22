// const express = require("express");
// const app = express();
// const path=require("path");
// app.set("views","./view");
// app.set("view engine","ejs");

// app.use((req, res, next) => {
//   console.log("middleware is running");

//     next();
    
// });

// app.get(["/","/home","/homepage"], (req, res) => {
//     // res.send("Home Page");
//     // res.sendFile(__dirname +"/view/home.html");
//     // res.sendFile(path.join(__dirname,"view","home.html"));
//  const blogs=[
//     {title:"test1",description:"description1"},
//     {title:"test2",description:"description2"},
//     {title:"test3",description:"description3"},
//  ]
// res.render("home",{blogs:blogs});

// });
// app.get("/about", (req, res) => {
//     // res.send("about Page");
//     //  res.sendFile(__dirname +"/view/about.html");
//     //   res.sendFile(path.join(__dirname,"view","about.html"));
//     res.render('about')
// });
// app.get("/about-usPage", (req, res) => {
//     res.redirect("/about");
// });
// app.use((req,res)=>{
//     // res.send("404 page")
//     //  res.sendFile(__dirname +"/view/404.html");
//     res.render("404")
// })
// app.listen(3000);
const express = require("express");

const app = express();

function checkLogin(req, res, next){

    const isLogin = true;

    if(!isLogin){

        return res.status(401).send("Please Login");

    }

    next();

}
app.use("/about",checkLogin,(req,res)=>{
    res.send("About page")

})

app.get("/users/:id", (req, res) => {

    const id = req.params.id;
    const name = req.query.name;

    res.status(200).json({
        success: true,
        userId: id,
        name: name
    });

});
app.get("/posts/:id",(req,res)=>{
    const id=req.params.id;
    const post=req.query.post;

    res.status(200).json({
        success:true,
        postId:id,
        post:post
    })
})
app.listen(3000, () => {
    console.log("Server Running...");
});