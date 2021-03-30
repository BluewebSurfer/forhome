const express = require ("express");
var router = express.Router();
const tokenmodel =require("./models/tokenmodel")
const nodemailer = require("nodemailer");
const mongoose = require("mongoose")

router.post("/",async function(req,res){
//  await console.log(req.body);
post= {
    name:req.body.name,
    email:req.body.email,
    package:req.body.package,
    phone:req.body.mobile,
    paymentstatus:false
}
 const postmessage = new tokenmodel(post);
 await postmessage.save;

 mail(posts.email);
  res.json({
      message:"done"
  })

})

function mail(adres){
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'samaptirouth180@gmail.com',
            pass:'9749101235@'
        }
    });
    
    let mailoptions ={
        from:'samaptirouth180@gmail.com',
        to:`${adres}`,
        subject:'testing',
        text:'Thank you for contacting. We will get back to you'
    };
    
    transporter.sendMail(mailoptions, function (err, info) {
        if(err){
            console.log(err)
        }else{
            console.log("it worked")
        }
     });
    
    }

module.exports= router