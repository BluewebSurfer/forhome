
const mongoose = require ("mongoose");


const registrationschema = mongoose.Schema({

    // name:{
    //     type:String,
    //     required :true
    // },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    packagename:{
        type:String,
        required:true
    },
    advancesuccessfull:{
        type:Boolean,
        default:false
    },
    paymentid:{
        type:String,
        default:""
    }
    
}),
  registrationmodel = mongoose.model("registrationmodel",registrationschema);

module.exports=registrationmodel;