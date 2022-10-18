import "./settings.css";
import Sidebar from "../../components/sidebar/SideBar";
import React from "react";

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Your Account</span>
            </div>
            <form className="settingsForm" action="">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img 
                        src="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
                        alt=""
                     />
                     <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-duotone fa-user"></i>
                     </label>
                     <input type="file" id="fileInput" style={{display:"none"}} />
                </div>
                <label htmlFor="">Username</label>
                <input type="text" placeholder="Kamrul"/>
                <label htmlFor="">Email</label>
                <input type="email" placeholder="kamrul@gmail.com"/>
                <label htmlFor="">Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update Account</button>
            </form>
        </div>
        <Sidebar/>
    </div>
  )
}
