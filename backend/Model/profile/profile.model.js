const  mongoose=require("mongoose")

const ProfileSchma= mongoose.Schema({
    username:{type:String,required:true},
    name:{type:String,required:true},
    dp:{type:String,required:true},
    bio:{type:String,required:true},
    following:{type:Number,required:true},
    follower:{type:Number,required:true},
    email:String,
    mobile:String
})

const ProfileModel=mongoose.model("profile",ProfileSchma)

module.exports={ProfileModel}

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOiI2M2FjMDQ2NjA5OWEwNGNlNTkxNDE3NzQiLCJpYXQiOjE2NzIyMTc3MjV9.TNKOSZi4wvE-SWPkPSZwo_7jemoICG4MJNeQuTtR6ho"