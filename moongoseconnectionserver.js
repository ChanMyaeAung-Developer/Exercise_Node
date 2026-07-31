// // mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0
// const express=require('express');
// const app=express();
// const mongoose=require('mongoose');
// let dburl= 'mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0';
// mongoose.connect(dburl).then(()=>{
//     console.log("mongodb is connected....")
// })
// .catch((e)=>{
//     console.log("mongodb connection fail")
// })

// app.listen(3000,()=>{
//     console.log("server is running on port 3000")
// })
import express from "express";
import mongoose from "mongoose";

const app = express();

let dburl= 'mongodb+srv://leok91651_db_user:MkdDStPXpnNneO1R@cluster0.v08b5c2.mongodb.net/?appName=Cluster0';

mongoose
  .connect(dburl)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server running on port 3000");
});