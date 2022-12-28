const { Signupmodel } = require("../../Model/Signup/Signup.model");

const Signup=async (req,res)=>{
    const {name,username,mobile,password}=req.body;
     let user=await Signupmodel.findOne({mobile})
     if(user){
        res.send({"msg":"User Already Exhist"})
     }
     else{
        const uname=await Signupmodel.findOne({username})
        if(uname){
           res.send({"msg":"Change your Username"})
        }
        else{
            const data=await Signupmodel.create({
                name,username,mobile,password
            })
            res.send({"msg":"Signup Successfull"})
        }
     }
}
module.exports={Signup}