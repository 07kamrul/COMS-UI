import "./topbar.css";
import React from "react";
import { Link } from "react-router-dom";

export default function TopBar() {
    const user = false;
    return (
    <div  className='top'>
        <div className="topLeft">
            <i className="topIcon fa-brands fa-square-twitter"></i>
            <i className="topIcon fa-brands fa-square-github"></i>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-linkedin"></i>
        </div>

        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link className="link" to="/">HOME</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">ABOUT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/">CONTACT</Link>
                </li>
                <li className="topListItem">
                    <Link className="link" to="/write">WRITE</Link>
                </li>
                <li className="topListItem">
                    {user && "LOGOUT"}
                </li>
            </ul>
        </div>

        <div className="topRight">
            {
                user ? (
                    <img className="topImg"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/640px-The_Blue_Marble_%28remastered%29.jpg" 
                    alt="" />
                ) : (
                    <ul className="topList">
                        <li className="topListItem">
                            <Link className="link" to="/login">LOGIN</Link>
                        </li>
                        <li className="topListItem">
                            <Link className="link" to="/register">REGISTER</Link>
                        </li>
                    </ul>
                )
            }
            <i className=".topSearchItemIcon fas fa-search"></i>
        </div>

    </div>
  )
}
