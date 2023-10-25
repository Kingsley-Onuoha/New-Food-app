import React from "react"
import ReactDOM from "react-dom/client"
import { CLOUDINARYIMAGEID_URL } from "../utils/config"


const RestaurantCard = (props) =>{
    const {resData}= props
    const {cloudinaryImageId, name, avgRating, cuisines} = resData.info

    return(
        <div>
            <div className="restaurant-card">
                <img src={CLOUDINARYIMAGEID_URL + cloudinaryImageId} alt="logo" />
                <div className="details"> 
                    <h2>{name}</h2>
                    <div className="rating1">
                        <div className="star"><i className="fa fa-star" aria-hidden="true"></i></div>
                        <h2>{avgRating}</h2>
                    </div>
                    <h3>
                        {cuisines?.join(" , ")}
                    </h3>
                </div>
            </div>
        </div>
    )
}
export default RestaurantCard
