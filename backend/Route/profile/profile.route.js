const {Router}= require("express")
const { authentication } = require("../../authentication/authentication")
const { PostProfile } = require("../../controller/profile/profile.controller")

const ProfileRoute= Router()

ProfileRoute.post("/",authentication,PostProfile)

module.exports={ProfileRoute}