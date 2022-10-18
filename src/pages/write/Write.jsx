import "./write.css";
import React from "react";

export default function Write() {
  return (
    <div className="write">
        <img
            src="https://images.unsplash.com/photo-1546587348-d12660c30c50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" 
            alt="" className="writeImg" />
        <form className="writeForm">
          <div className="writeFormGroup">
            <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
          </div>
          <div className="writeFormGroup">
            <textarea placeholder="Tell your story..."
                type="text"
                classname="writeInput writeText"
                ></textarea>
          </div>
          <button className="writeSubmit">Publish</button>
        </form>
    </div>
    )
}
