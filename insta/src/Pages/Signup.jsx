import React from "react";
import instagram from "../images/instagram.png";
import "./signup.css";
import { Input } from '@chakra-ui/react'
const Signup = () => {
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
                width="240px"
              />
            </center>
            <div className="inp">
              <Input placeholder='medium size' size='md' />
              <br />
              <Input placeholder='medium size' size='md' />
            </div>
           
          </div>
          <div className="box2"></div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
