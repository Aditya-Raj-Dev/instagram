const { ProfileModel } = require("../../Model/profile/profile.model");
var jwt =require("jsonwebtoken")

const PostProfile=async(req,res)=>{
    const {username,name,dp,bio,follower,following,email,gender,mobile,userid}=req.body;
    const profile=await ProfileModel.create({
        username,name,dp,bio,follower,following,email,mobile,userid,gender
    })
    res.send({"msg":"Profile Updated"})
    console.log(userid)
}


const GetProfile=async(req,res)=>{
    const {userid}=req.body;
    const profile= await PostProfile.find({userid})
}
module.exports={PostProfile}