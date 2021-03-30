const express = require ("express");
// const router = require("./tokenmoney");
const router = express.Router();


router.post("/",(req,res)=>{
    const logindetails = req.body;
    Bws.registrationmodel.findOne({fullname:logindetails.fullname},function(err,user){
        if(err){
            res.json(err)
        };
        if( user.password===req.body.password && user.adnvancesuccessfull === false){
            res.json({
                "status":no
            });           
        }
        if( user.password===req.body.password && user.adnvancesuccessfull === true){
            res.json({
                user
            });           
        }
        else{
            console.log("crediantialswroung")
        }
    })
})

module.exports=router