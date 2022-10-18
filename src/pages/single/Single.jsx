import SinglePost from "../../components/singlePost/SinglePost"
import SlideBar from "../../components/sidebar/SideBar";
import "./single.css";
import React from "react";

export default function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <SlideBar/>  
    </div>
  )
}
