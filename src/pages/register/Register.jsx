import "./register.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm" action="">
                <label htmlFor="">Username</label>
                <input type="text" className="registerInput" placeholder="Enter your username..."/>
                <label htmlFor="">Email</label>
                <input type="email" className="registerInput" placeholder="Enter your email..."/>
                <label htmlFor="">Password</label>
                <input type="password" className="registerInput" placeholder="Enter your password..."/>
                <button className="registerButton">register</button>
            </form>
            <button className="loginButton">
                <Link className="link" to="/login">Login</Link>
            </button>
        </div>
      )
}
