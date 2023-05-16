import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div className="login">
        <span className="loginTitle">Register</span>

      <form className="loginform">
      <label> Username </label>
        <input type="text" className="logininput" placeholder="Enter Your Username" />
       
        <label>Email </label>
        <input type="text" className="logininput" placeholder="Enter Your Email" />
        <label>Password </label>
        <input type="text" className="logininput" placeholder="Enter Yoor Password" />

        <button className="LoginButton"><Link to="/login " className="link">
            {" "}
            Register
          </Link></button>
      </form>
      <button className="LoginButtonregister">
      <Link to="/login " className="link">
            {" "}
            Login
          </Link>
      </button>
    </div>
  );
}
