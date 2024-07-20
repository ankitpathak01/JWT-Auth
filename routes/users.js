const express=require("express");
const { handleSignIn,handleLogIn } = require("../controllers/users");
const route=express.Router();

route.post("/",handleSignIn);
route.post("/login",handleLogIn);

module.exports=route;