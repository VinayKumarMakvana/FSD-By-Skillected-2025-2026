const express = require('express');
const router = express.Router();
const auth = function(req,res,next){
    console.log("Inside auth middleware");
    req.user = {userId:1,role:"student"};
    if(req.user){
        next();
    }else{
        res.json({
            success:false,message:"not a valid user"
        })
    }
}

const isStudent = function(req,res,next){
    console.log("Inside isStudent middleware");
    if(req.user.role === "student"){
        next();
    }else{
        res.json({
            success:false,message:"not a student"
        })
    }
}

const isAdmin = function(req,res,next){
    console.log("Inside isAdmin middleware");

    if(req.user.role === "admin"){
        next();
    }else{
        res.json({
            success:false,message:"not an admin"
        })
    }
}



router.get('/',(req,res)=>{
    res.send("Inside Fashion Route");
});



router.get('/student',auth,isStudent,(req,res)=>{
    res.send("Inside Student Route");
});

router.get('/admin',auth,isAdmin,(req,res)=>{
    res.send("Inside Admin Route");
});


module.exports = router;