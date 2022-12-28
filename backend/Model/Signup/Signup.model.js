const mongoose= require("mongoose")

const SignupSchema= mongoose.Schema({
    mobile:{type:String,required:true},
    name:{type:String,required:true},
    username:{type:String,required:true},
    password:{type:String,required:true},
},{timestamps:true,new:true},)

const Signupmodel= mongoose.model("signup",SignupSchema)

module.exports={Signupmodel}