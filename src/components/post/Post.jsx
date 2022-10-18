import "./post.css";
import React from "react";

export default function Post() {
  return (
    <div className='post'>
      <img className="postImg"
        src="https://images.unsplash.com/photo-1516475429286-465d815a0df7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
            Premium Photo | Natural landscape in a botanical garden
        </span>
        <hr />
        <span className="postdate">1 hour ago</span>
      </div>
      <p className="postDesc">
        A botanical garden or arboretum is a space for cultivating, collecting, and studying plants. These green spaces usually contain plant collections organized in different ways (geographical origin, bioma, landscape, taxa, functions, etc.).
      </p>
    </div>
  )
}
