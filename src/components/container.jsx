import React from "react";
import Post from "./post";
import "./container.css"

export default function Container () {
  return (
      <div className="flexbox">
        <div className="left-colum"></div>
        <div className="posts">
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
          <Post></Post>
        </div>
        <div className="right-colum"></div>
      </div>
  )

}