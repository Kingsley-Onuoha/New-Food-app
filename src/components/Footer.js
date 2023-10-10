import React from "react"
import ReactDOM from "react-dom/client"
import { LOGO_URL } from "../utils/config"




const Footer = () =>{
    return(
        <div className="footer">
            <img src={LOGO_URL} alt="logo" />
            <h2>Contact Us</h2>
            <h2>Terms and Conditions</h2>
            <h2>© 2023 Kingsley Onuoha Development</h2>
        </div>
    )
}
export default Footer