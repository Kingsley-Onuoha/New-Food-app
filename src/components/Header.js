import React, { useContext, useState } from "react"
import ReactDOM from "react-dom/client"
import { LOGO_URL } from "../utils/config"
import { Link } from "react-router-dom"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"


const Header = ()=>{
  const [butName, setButname] = useState("Login")

  const data = useContext(UserContext)

  const cartItems = useSelector((store) => store.cart.items)
  console.log(cartItems)

  return(
    <div className="header">
      <div className="left">
        <Link className="link" to ="/"><img src={LOGO_URL} alt="logo" /></Link>
        <div className="location">
          <h2>Lagos</h2>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
      </div>

      <div className="right">
        <Link className="link" to="/">
          <div className="search">
            <i className="fa fa-home" aria-hidden="true"></i>
            <h2>Home</h2>
          </div>
        </Link>

        <Link className="link" to="/about">
          <div className="help">
            <i className="fa fa-question-circle" aria-hidden="true"></i>
            <h2>About</h2>
          </div>
        </Link>

        <Link className="link" to="/signin">
          <div className="user">
            <i className="fa fa-user-circle" aria-hidden="true"></i>
            <h2>Sign In</h2>
          </div>
        </Link>

        <Link className="link" to="/cart">
          <div className="cart">
            <i className="fa fa-shopping-cart" aria-hidden="true"></i>
            <h2>Cart</h2>
            <div className="value">
              <h3>{cartItems.length}</h3>
            </div>
        </div>
        </Link>

        <button onClick={()=>{
          butName === "Login"? 
          setButname("Logout"): 
          setButname("Login")
        }}
        >{butName}</button>
        <h2>{data.loggedInUser}</h2>
      </div>
    </div>
  )
}
export default Header;