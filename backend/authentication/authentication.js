const jwt=require("jsonwebtoken")

const authentication=async(req,res,next)=>{
    console.log("jjk")
    if(req.headers.authorization){
     const token=req.headers.authorization
     try{
        jwt.verify(token,'adi123',async function(err, decoded) {
            if(err)
            console.log(err)
            else{
                // console.log(decoded) // bar
                req.body.userid=decoded.userid
                next()
            }
          });
        // var decoded = jwt.verify(token, 'adi123')
        //     console.log(decoded)
        //     next()

     }
     catch(er){
      console.log(er)
      res.send({"msg":"Please Login Again"})
     }
    }
    else{
        res.send({"msg":"Please Login"})
    }
}

module.exports={authentication}