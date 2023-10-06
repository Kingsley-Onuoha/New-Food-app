import React from "react"
import ReactDOM from "react-dom/client"


const Header = ()=>{
  return(
    <div className="header">
      <div className="left">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5r4A5QPdNCibTUxtuqJc6HAcqb2pAjvyKg&usqp=CAU" alt="logo" />
        <h3>Lagos</h3>
      </div>
      <div className="right">
        <div className="search">
          <i class="fa fa-search" aria-hidden="true"></i>
          <h3>Search</h3>
        </div>
        <div className="offers">
          <i class="fa fa-cog" aria-hidden="true"></i>
          <h3>Offers</h3>
        </div>
        <div className="help">
          <i class="fa fa-question-circle" aria-hidden="true"></i>
          <h3>Help</h3>
        </div>
        <div className="user">
          <i class="fa fa-user-circle" aria-hidden="true"></i>
          <h3>Sign In</h3>
        </div>
        <div className="cart">
          <div className="value">
            <h3>0</h3>
          </div>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <h3>Cart</h3>
        </div>
      </div>

    </div>
  )
}
export default Header;