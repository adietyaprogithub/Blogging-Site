import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>

      <form className="loginform">
        <label>Email </label>
        <input
          type="text"
          className="logininput"
          placeholder="Enter Your Email"
        />
        <label>Password </label>
        <input
          type="text"
          className="logininput"
          placeholder="Enter Yoor Password"
        />

        <button className="LoginButton"><Link to="/" className="link">
            {" "}
            Login
          </Link></button>
      </form>
      <button className="LoginButtonregister">
      <Link to="/register " className="link">
            {" "}
            Register
          </Link>
       </button>
    </div>
  );
}
