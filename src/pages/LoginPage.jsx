import React from "react";
import Input from "../component/Input.jsx";
import Headline from "../component/Headline.jsx";
import ButtonFill from "../component/ButtonFill.jsx";

function LoginPage() {
  return (
    <div className="container-relog">
      <div className="form">
        <Headline name="LOGIN" />
        <h2>Welcome to capcin always for you</h2>
        <Input placeholder="Enter Username" />
        <Input placeholder="Password" />
        <div className="container__checkbox-password">
          <div className="checkbox">
            <input type="checkbox" name="remembr" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>
          <p>Forgot password ?</p>
        </div>
        <ButtonFill name="Submit" />
        <p className="continou-with">Or continue with</p>
        <div className="acount">
          <img src="public/GmailGmail.svg" alt="" />
          <img src="public/Microsoft.svg" alt="" />
          <img src="public/Facebook.svg" alt="" />
          <img src="public/Apple.svg" alt="" />
        </div>
        <p className="text-reg">Don't have a account ? Click here</p>
      </div>
      <img src="public/relog.jpeg" alt="" />
    </div>
  );
}

export default LoginPage;
