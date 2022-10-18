import Header from "../../components/header/Header"
import Posts from "../../components/posts/Posts"
import SlideBar from "../../components/sidebar/SideBar"
import "./home.css"
import React from "react";

export default function Home() {
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
