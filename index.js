const express=require("express");
const {ConnectMongoDb}=require("./connections");
const path=require("path");
const cookieParser=require("cookie-parser");
const {restricToLoggedinUserOnly}=require("./middlewares/auth")
const app=express();
const PORT=8001;


const UserRoute=require("./routes/users");
const StaticRoute=require("./routes/staticRoute");
const login=require("./routes/login");

ConnectMongoDb("mongodb://127.0.0.1:27017/User-signup").then(()=>console.log("DataBase connected"));

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));


app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser());


app.use("/",StaticRoute);
app.use("/home",restricToLoggedinUserOnly,login);
app.use("/user",UserRoute);


app.listen(PORT,()=>console.log(`Server Started at ${PORT}`))