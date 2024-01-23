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
    signIn,
    signInWithGoogleAuth,
    signInWithFacebookAuth,
    signInWithMicrosoft,
    signInWithApple,
    user,
    logOut,
  } = UserAuth();

  console.log(user);

  const handlesignout = async (e) => {
    e.preventDefault();
    try {
      await logOut();
      alert("You have been signed out");
      navigate("/");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signIn(userName, password);
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  const handleGoogleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithGoogleAuth();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleFacebookLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithFacebookAuth();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleMicrosoftLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithMicrosoft();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
    }
  };

  const handleAppleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithApple();
      navigate("/dashboard");
    } catch (error) {
      alert(error.message);
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
          <button onClick={handleGoogleLogin}>
            <img src="public/GmailGmail.svg" alt="" />
          </button>
          <button onClick={handleMicrosoftLogin}>
            <img src="public/Microsoft.svg" alt="" />
          </button>
          <button onClick={handleFacebookLogin}>
            <img src="public/Facebook.svg" alt="" />
          </button>
          <button onClick={handlesignout}>
            <img src="public/Apple.svg" alt="" />
          </button>
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
