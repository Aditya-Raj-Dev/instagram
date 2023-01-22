import React,{useState} from "react";
import instagram from "../images/instagram.png";
import googleplay from "../images/googleplay.png";
import microsoft from "../images/microsoft.png";
import terms from "../images/terms.png";
import "./signup.css";
import { Button, Input } from '@chakra-ui/react'
import {AiFillFacebook } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";


const Signup = () => {
const navigate=useNavigate()
  
 
  return (
    <div className="mainbox">
      <div className="signup">
        <img src={instagram} alt="" height="400px" width="380px" />
        <div className="box0"> 
          <div className="box">
            <center>
              <img
                src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
                alt=""
                width="230px"
              />
            </center>
            <div className="inp">
              <div>
               <Input placeholder="Phone number, username or email address" size='md' style={{ background:"#faf9f9",borderRadius:"0px"}}  />
              </div>
              <div>
              <Input type="password" size='md' placeholder="Password" style={{ background:"#faf9f9" ,borderRadius:"0px"}} />
              </div>
              <div style={{marginTop:"7px"}}>
              <Button colorScheme='twitter' style={{height:"30px",width:"290px"}}>Log in</Button>
              </div>

                {/* OR */}

             <div style={{display:"flex",justifyContent:"space-around"}}>
              <div style={{border:"0.5px solid gray",height:"1px",width:"100px",marginTop:"12px"}}>
              </div>
          <div style={{color:"gray"}}>
            OR
          </div>
              <div style={{border:"0.5px solid gray",height:"0.1rem",width:"100px",marginTop:"12px"}}></div>
             </div>

             {/* fb */}
               <div className="facebook"  onClick={()=>{window.location.replace('https://facebook.com')
              return navigate("/")}}>
                <div> <AiFillFacebook fontSize="20px" /></div>
                <div><h5 style={{fontWeight:"30h5x"}}>Log in With Facebook</h5> </div>
               </div>

               {/* forgotten */}
              
                  <p style={{fontSize:"14px",marginTop:"10px",color:"#00376b",cursor:"pointer"}}>Forgotten your Password?</p>
            </div>
           
          </div>
          <div className="box2">
            <p>Don't have an account?</p>
            <h4 className="signuph4">Sign up</h4>
          </div>
          <div className="playstore">
            Get the app
            <div >
            
              <img src={googleplay} alt="" onClick={()=>{window.location.replace('https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE217DEB5-B838-4381-9AE4-0AECDE1A6E19%26utm_content%3Dlo%26utm_medium%3Dbadge')
              return navigate("/")}} />
              <img src={microsoft} alt="" onClick={()=>{window.location.replace('https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT')
              return navigate("/")}}/>
            </div>
          </div>
        </div>
      </div>
      <center>
      <img src={terms} alt="" className="terms" />
      </center>
    
    </div>
  );
};

export default Signup;
