import "./header.css";
import React from "react";

export default function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className="headeTitlesSm">React & Node</span>
            <span className="headeTitlesLg">Blog</span>
        </div>
        <img className="headerImg"
         src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=2000"
         alt=""/>
    </div>
  )
}
