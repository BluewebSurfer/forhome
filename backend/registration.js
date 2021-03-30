const express = require ("express");
const post = require("./models/registrationmodel.js");
const router = express.Router();
const mongoose = require("mongoose");


const randomnumberforsignup="";
const posts={
    fullname:"",
    email:"",
    password:"",
    package:""
}
const postmessage="";

router.post("/",async function(req,res){
          
         posts.fullname=req.body.name
         posts.email=req.body.email
         posts.password=req.body.password
         posts.package=req.body.package

       postmessage = new post(posts);
     

randomnumberforsignup = Math.floor(Math.random() * 1001);
    
     mail(posts.email);
      res.json({
          sendotp:"now",
      })
})
router.post("/otp",async function(req,res){
   otp= req.body.otp;
   if(req.body.otp==randomnumberforsignup )
{
    await postmessage.save();
}
res.json({
    "accountcreated":true
})
})

module.exports= router