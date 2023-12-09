import React from "react";
import Input from "../component/Input.jsx";
import Headline from "../component/Headline.jsx";
import ButtonFill from "../component/ButtonFill.jsx";

function RegisterPage() {
  return (
    <div className="container-relog">
      <div className="form">
        <Headline name="REGISTER" />
        <div className="container-icon">
          <img src="public/icon.png" alt="" />
          <p>CAPCIN</p>
        </div>
        <Input placeholder="Your full name" />
        <Input placeholder="Your email" />
        <Input placeholder="Password" />
        <Input placeholder="Confirm Password" />
        <div className="space"></div>
        <ButtonFill name="Create acoun" />
      </div>
      <img src="public/relog.jpeg" alt="" />
    </div>
  );
}

export default RegisterPage;
