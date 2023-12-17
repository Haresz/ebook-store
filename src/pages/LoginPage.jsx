import React, { useState } from "react";
import Input from "../component/Input.jsx";
import Headline from "../component/Headline.jsx";
import ButtonFill from "../component/ButtonFill.jsx";
import { Form } from "react-router-dom";
import { redirect } from "react-router-dom";

function LoginPage() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Simulasi validasi login (gantilah dengan logika autentikasi yang sesuai)
    if (userName === "Haresz09" && password === "AaN08&oO") {
      // Simpan informasi login di localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("username", userName);
      redirect("/dashboard");
      alert("Login berhasil!");
    } else {
      alert("Login gagal. Periksa kembali username dan password.");
      redirect("/");
    }
  };
  return (
    <div className="container-relog">
      <div className="form">
        <Form
          onSubmit={handleLogin}
          action={
            userName === "Haresz09" && password === "AaN08&oO"
              ? "/dashboard"
              : "/"
          }
        >
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
        <p className="text-reg">Don't have a account ? Click here</p>
      </div>
      <img src="public/relog.jpeg" alt="" />
    </div>
  );
}

export default LoginPage;
