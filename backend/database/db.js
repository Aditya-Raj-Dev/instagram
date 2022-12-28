const mongoose =require("mongoose")

const connection =mongoose.connect("mongodb+srv://adi:123@cluster0.dzolg5r.mongodb.net/insta")

module.exports={connection}