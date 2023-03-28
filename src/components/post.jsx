import React from "react";
import "./post.css"

export default function Post () {
  return (
      <div className="flexbox-1">
        <img className="post-avatar" src={require("../img/charlie-avatar.png")}></img>
        <div className="flexbox-2">
          <div className="username">Charlie</div>
          <div className="content">Woof Woof</div>
          <div className="reply">Reply</div>
        </div>
      </div>
  )
}