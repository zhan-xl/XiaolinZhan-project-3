import React from "react";
import "./LogIn.css"

export default function LogIn() {
  return (
      <div className="container">
        <div className="sign-in">Sign in</div>
        <div className="log-in-username">User name</div>
        <input type="text" className="input"/>
        <div className="log-in-password">Password</div>
        <input type="text" className="input"/>
        <div></div>
        <div className="log-in-button">Log In</div>
      </div>
  )
}