// // // mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0
// // const express=require('express');
// // const app=express();
// // const mongoose=require('mongoose');
// // let dburl= 'mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0';
// // mongoose.connect(dburl).then(()=>{
// //     console.log("mongodb is connected....")
// // })
// // .catch((e)=>{
// //     console.log("mongodb connection fail")
// // })

// // app.listen(3000,()=>{
// //     console.log("server is running on port 3000")
// // })
// import express from "express";
// import mongoose from "mongoose";

// const app = express();

// let dburl= 'mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0';

// mongoose
//   .connect(dburl)
//   .then(() => {
//     console.log("MongoDB Connected");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const app = express();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};

connectDB();
//schema
const userSchema=mongoose.Schema({
    name: String,
    age: Number,
    email: String

},{timestamps:true});

//model
const User=mongoose.model('User',userSchema);

//add newuser
// const newUser = new User({ 
//   name: "Aung Aung Ko", 
//   age: 25, 
//   email: "aungko@example.com" 
// });

// newUser.save()
//   .then(() => console.log("Successful add New user!"))
//   .catch(err => console.log("error in adding :", err));

app.get("/",async(req,res)=>{
  await User.create({
    name: "Koe Koe Kow",
    age: 17,
    email: "koe@gmail.com"
});
res.end()
})

app.get('/all',async(req,res)=>{
  const users = await User.find();
  res.send(users)
});
app.get('/update',async(req,res)=>{

await User.updateOne(
  { name: "Koe" },
  {age: 30}
);

});
app.get("/users/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;

    const result = await User.deleteOne({
      _id: id
    });

    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Delete failed");
  }
});
app.get("/users/filter",async(req,res)=>{
  try{
    const result=await User.find({
  name: {
    $regex: "ko",
    $options: "i"
  }
}
);
    res.send(result);
  }
  catch(error){}
})
// app.get("/all", async (req, res) => {
//   try {
//     const users = await User.find();

//     res.send(users);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Failed to get users");
//   }
// });
app.listen(3000, () => {
  console.log("Server running on port 3000");
});