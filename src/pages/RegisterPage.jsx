import React, { useState } from "react";
import Input from "../component/Input.jsx";
import Headline from "../component/Headline.jsx";
import ButtonFill from "../component/ButtonFill.jsx";
import { UserAuth } from "../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const { createUser } = UserAuth();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        await createUser(email, password);
        navigate("/");
      } catch (error) {
        alert(error.message);
      }
    } else {
      null;
    }
  };
  return (
    <div className="container-relog">
      <form onSubmit={handleSubmit} className="form">
        <Headline name="REGISTER" />
        <div className="container-icon">
          <img src="public/icon.png" alt="" />
          <p>CAPCIN</p>
        </div>
        <Input placeholder="Your full name" />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
        />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Input
          onChange={(e) => setConfirmPassword(e.target.value)}
          placeholder="Confirm Password"
        />
        {password !== confirmPassword ? <p>password tidak sama</p> : <></>}
        <div className="space"></div>
        <ButtonFill name="Create acoun" />
      </form>
      <img src="public/relog.jpeg" alt="" />
    </div>
  );
}

export default RegisterPage;
