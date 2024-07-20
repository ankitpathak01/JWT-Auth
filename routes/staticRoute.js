const express=require("express");
const route=express.Router();

route.get("/signup",(req,res)=>{
    return res.render("signup");
})
route.get("/login",(req,res)=>{
    return res.render("login");
})


module.exports=route;
