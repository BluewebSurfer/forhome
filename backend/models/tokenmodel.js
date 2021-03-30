const express = require ("express");
const mongoose = require ("mongoose");




const tokenfromschema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email:{
        type : String,
        required : true
    },
    package :{
        type : Number,
        required : true
    },
    phone :{
        type : Number,
        required : true
    },
    paymentstatus:{
        type:Boolean,
        default :false
    }
})


 const tokenmodel =mongoose.model("tokenmodel",tokenfromschema);
  module.exports= tokenmodel;