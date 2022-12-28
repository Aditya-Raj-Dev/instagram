const express=require("express")
 
const { Login } = require("./controller/sign-log/Login.controller")
const { connection } = require("./database/db")
const { ProfileRoute } = require("./Route/profile/profile.route")
const { LoginRoute } = require("./Route/sig-log/Login.route")
const { SignupRoute } = require("./Route/sig-log/signup.route")


 const app=express()

 app.use(express.json())

 app.use("/profile",ProfileRoute)
 app.use("/signup",SignupRoute)
 app.use("/login",LoginRoute)

 app.get("/",(req,res)=>{
    res.send("Welcome to my world")
 })

 app.listen(8080,async()=>{
    try{
        await connection
        console.log("connected to the database")
    }
    catch{
        console.log("Error in connecting")
    }
    console.log("server Started")
 })


