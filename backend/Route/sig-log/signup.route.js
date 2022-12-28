const {Router}=require("express")
const { Signup } = require("../../controller/sign-log/Signup.controller")

 const SignupRoute=Router()

 SignupRoute.post("/",Signup)

 module.exports={SignupRoute}