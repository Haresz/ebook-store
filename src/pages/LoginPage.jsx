import React, { useState } from "react";
import Input from "../component/Input.jsx";
import Headline from "../component/Headline.jsx";
import ButtonFill from "../component/ButtonFill.jsx";
import { Form, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext.jsx";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    sigIn,
    sigInWithGoogleAuth,
    sigInWithFacebookAuth,
    sigInWithMicrosoft,
    sigInWithApple,
  } = UserAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await sigIn(userName, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div className="container-relog">
      <div className="form">
        <Form onSubmit={handleLogin}>
          <Headline name="LOGIN" />
          <h2>Welcome to capcin always for you</h2>
          <Input
            placeholder="Enter Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="container__checkbox-password">
            <div className="checkbox">
              <input type="checkbox" name="remembr" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <p>Forgot password ?</p>
          </div>
          <ButtonFill type="submit" name="Submit" />
        </Form>
        <p className="continou-with">Or continue with</p>
        <div className="acount">
          <img src="public/GmailGmail.svg" alt="" />
          <img src="public/Microsoft.svg" alt="" />
          <img src="public/Facebook.svg" alt="" />
          <img src="public/Apple.svg" alt="" />
        </div>
        <p className="text-reg">
          Don't have a account ? <Link to={"/register"}>Click here</Link>
        </p>
      </div>
      <img src="public/relog.jpeg" alt="" />
    </div>
  );
}

export default LoginPage;
