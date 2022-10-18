import React from "react";
import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img 
            src="https://images.unsplash.com/photo-1516496636080-14fb876e029d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
            alt="" />
            <p>
                Hey this is a micro finace blog.
            </p>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
                <li className="sidebarListItem">Purbachal</li>
                <li className="sidebarListItem">Uttara</li>
                <li className="sidebarListItem">Asulia</li>
                <li className="sidebarListItem">Gazipur</li>
                <li className="sidebarListItem">Saver</li>
            </ul>
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
                <i className="sidebarIcon fa-brands fa-square-twitter"></i>
                <i className="sidebarIcon fa-brands fa-square-github"></i>
                <i className="sidebarIcon fa-brands fa-square-facebook"></i>
                <i className="sidebarIcon fa-brands fa-linkedin"></i>
            </div>
        </div>        
    </div>
  )
}
