import React from "react";
import "./navBar.css"

export function NavBarLogOut() {
  return (
      <div className='navbar-frame'>
        <div className="navbar-box-left">
          <div className="navbar-button">Home</div>
        </div>
        <div className="navbar-box-right">
          <div className="navbar-button">Log In</div>
          <div className="navbar-button">Sign Up</div>
        </div>
      </div>
  )
}

export function NavBarLogIn() {
  return (
      <div className='navbar-frame'>
        <div className="navbar-box-left">
          <div className="navbar-button">Home</div>
        </div>
        <div className="navbar-box-right">
          <div className="navbar-button"> + Add new</div>
          <div className="navbar-username">Charlie <span
              className="triangle">&#9660;</span></div>
          <img className="navbar-avatar"
               src={require("../img/charlie-avatar.png")}
               alt="charlie's avatar"></img>
        </div>
      </div>
  )
}