const mongoose = require("mongoose")

const PhotosSchema=mongoose.Schema({
    id:{type:String,required:true},
    url:{type:String,required:true},
    title:String,
    comment:Array,
    like:Number
})

const  PhotoModel=mongoose.model("photo",PhotosSchema)

module.exports={PhotoModel}