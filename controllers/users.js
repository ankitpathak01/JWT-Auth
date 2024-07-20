
const User=require("../models/users");
const{setUser}=require("../services/auth");

async function handleSignIn(req,res){
    const {name,email,password}=req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/login");
}
async function handleLogIn(req,res){
    const {email,password}=req.body;
    const user= await User.findOne({email,password,});
    if(!user) return res.render("login",{
        error:"Invalid email or password"
    });

    const token=setUser(user);
    res.cookie("uid",token);
    return res.render("home");
}

module.exports={
    handleSignIn,
    handleLogIn,
}
