import React, { useState } from "react";
import instagram from "../../images/instagram.png";
import googleplay from "../../images/googleplay.png";
import microsoft from "../../images/microsoft.png";
import terms from "../../images/terms.png";
import "./signup.css";
import { Button, Input } from "@chakra-ui/react";
import { AiFillFacebook } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <br />
      <div className="signupbox">
        <div className="signbox1">
          <center>
            <img
              src="https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Black-Logo.wine.svg"
              alt=""
              width="230px"
            />
          </center>
          <h3 className="signheadline">
            Sign up to see photos and videos from your friends.
          </h3>

          <Button
            onClick={() => {
              window.location.replace("https://facebook.com");
              return navigate("/");
            }}
            colorScheme="twitter"
            leftIcon={<AiFillFacebook fontSize="20px" />}
            width="80%"
          >
            {" "}
            Log in With Facebook
          </Button>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <div
              style={{
                border: "0.5px solid gray",
                height: "1px",
                width: "100px",
                marginTop: "12px",
              }}
            ></div>
            <div style={{ color: "gray" }}>OR</div>
            <div
              style={{
                border: "0.5px solid gray",
                height: "0.1rem",
                width: "100px",
                marginTop: "12px",
              }}
            ></div>
          </div>

          <div className="inp">
            <div>
              <Input
                placeholder="Mobile number or email address"
                size="md"
                style={{ background: "#faf9f9", borderRadius: "0px" }}
              />
            </div>
            <div>
              <Input
                size="md"
                placeholder="Full Name"
                style={{ background: "#faf9f9", borderRadius: "0px" }}
              />
            </div>
            <div>
              <Input
                size="md"
                placeholder="Username"
                style={{ background: "#faf9f9", borderRadius: "0px" }}
              />
            </div>
            <div>
              <Input
                type="password"
                size="md"
                placeholder="Password"
                style={{ background: "#faf9f9", borderRadius: "0px" }}
              />
            </div>

            <div style={{ marginTop: "7px" }}>
              <Button
                colorScheme="twitter"
                style={{ height: "35px", width: "290px" }}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="signbox2">
          <p>Have an account?</p>
          <h4 className="signh4" onClick={()=>navigate("/")}>Log in</h4>
        </div>
        <div className="playstore">
          Get the app
          <div>
            <img
              src={googleplay}
              alt=""
              onClick={() => {
                window.location.replace(
                  "https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DE217DEB5-B838-4381-9AE4-0AECDE1A6E19%26utm_content%3Dlo%26utm_medium%3Dbadge"
                );
                return navigate("/signup");
              }}
            />
            <img
              src={microsoft}
              alt=""
              onClick={() => {
                window.location.replace(
                  "https://apps.microsoft.com/store/detail/instagram/9NBLGGH5L9XT"
                );
                return navigate("/signup");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
