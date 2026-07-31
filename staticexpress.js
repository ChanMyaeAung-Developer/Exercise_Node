const express=require("express");
const app =express();
app.set("views",'./view');
app.set("view engine",'ejs');
app.get("/",(req,res)=>{
     const blogs=[
    {title:"test1",description:"description1"},
    {title:"test2",description:"description2"},
    {title:"test3",description:"description3"},
 ]
res.render("home",{blogs:blogs});
    // res.render('test')
})
app.listen(3000,()=>{console.log("Server is running in port 3000")});

