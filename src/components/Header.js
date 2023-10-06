import React from "react"
import ReactDOM from "react-dom/client"


const Header = ()=>{
  return(
    <div className="header">
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&usqp=CAU" alt="logo" />
        <div className="location">
          <h2>Lagos</h2>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </div>
      </div>
      <div className="right">
        <div className="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <h2>Search</h2>
        </div>
        <div className="offers">
          <i class="fa fa-cog" aria-hidden="true"></i>
          <h2>Offers</h2>
        </div>
        <div className="help">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <h2>Help</h2>
        </div>
        <div className="user">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <h2>Sign In</h2>
        </div>
        <div className="cart">
          <div className="value">
            <h3>0</h3>
          </div>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <h2>Cart</h2>
        </div>
      </div>

    </div>
  )
}
export default Header;