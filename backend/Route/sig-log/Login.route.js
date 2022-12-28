const {Router}=require("express")
const { Login } = require("../../controller/sign-log/Login.controller")

 const LoginRoute=Router()

 LoginRoute.post("/",Login)

 module.exports={LoginRoute}