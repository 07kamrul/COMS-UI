import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SlideBar from "../../components/sidebar/SideBar"
import "./home.css"
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [posts,setPosts] = useState([]);
  useEffect(() =>{
    const fetchPosts = async() => {
      const res = await axios.get("/member/GetMembers")
      console.log(res);
    }
    fetchPosts()
  },[])
  return (
    <>
        <Header />
        <div className="home">
            <Posts/>
            <SlideBar/>
        </div>
    </>
  )
}
