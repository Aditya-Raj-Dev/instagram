const { Signupmodel } = require("../../Model/Signup/Signup.model");
var jwt = require('jsonwebtoken');

const Login=async (req,res)=>{
    const {mobile,password}=req.body;
     const user=await Signupmodel.findOne({mobile,password})
     console.log(user)
      if(!user){
         res.send({"msg":"Please Signup First"})
      }
      else{
        const userid=user._id
        var token = jwt.sign({userid}, 'adi123');
        res.send({"msg":"Login Successfull","token":token})
      }
}

module.exports={Login}