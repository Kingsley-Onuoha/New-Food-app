import React, { useState } from "react"
import ReactDOM from "react-dom/client"
import { LOGO_URL } from "../utils/config"
import { Link } from "react-router-dom"


const Header = ()=>{
  const [butName, setButname] = useState("Login")

  return(
    <div className="header">
      <div className="left">
        <img src={LOGO_URL} alt="logo" />
        <div className="location">
          <h2>Lagos</h2>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <i className="fa fa-home" aria-hidden="true"></i>
          <h2>Home</h2>
        </div>
        <div className="help">
          <i className="fa fa-question-circle" aria-hidden="true"></i>
          <h2>About</h2>
        </div>
        <div className="user">
          <i className="fa fa-user-circle" aria-hidden="true"></i>
          <h2>Sign In</h2>
        </div>
        <div className="cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
          <h2>Cart</h2>
          <div className="value">
            <h3>0</h3>
          </div>
        </div>
        <button onClick={()=>{
          butName === "Login"? 
          setButname("Logout"): 
          setButname("Login")
        }}
        >{butName}</button>
      </div>
    </div>
  )
}
export default Header;