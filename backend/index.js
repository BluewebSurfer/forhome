const express = require ("express");
const bodyParser = require ("body-parser");
const app =express();
const mongoose = require("mongoose");
const nodemailer= require("nodemailer");
const tokenform = require("./tokendatabase");
const registration = require("./registration");
const tokenmoney1 = require("./tokenmoney");
const login = require("./login")
const cors  = require ("cors");


app.use(cors());

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json);

connectionurl="mongodb+srv://Rupan:Rupan@1234567890@cluster0.whfx5.mongodb.net/bws?retryWrites=true&w=majority"
// connectionurl =`mongodb+srv://peter:eNSqAd7eATH0zMh4@cluster0.jhbf8.mongodb.net/dinhata?retryWrites=true&w=majority`
mongoose.connect(connectionurl,{useNewUrlParser: true,useUnifiedTopology:true,useCreateIndex:true,})
.then(()=>console.log("databaseconnected"))
.catch((error)=>console.log(error));


app.use("/tokenform",tokenform);
app.use("/tokenmoney",tokenmoney1);
app.use("/registration",registration);
app.use("/login",login);



app.listen("6968",function(req,res){
    console.log("backend server started at port 6968")
})


