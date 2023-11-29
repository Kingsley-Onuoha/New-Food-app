import React from "react"
import ReactDOM from "react-dom/client"
import { CLOUDINARYIMAGEID_URL } from "../utils/config"


const RestaurantCard = (props) =>{
    const {resData}= props
    const {cloudinaryImageId, name, avgRating, cuisines} = resData?.info

    return(
        <div>
            <div className="restaurant-card" data-testid="resCard">
                <img src={CLOUDINARYIMAGEID_URL + cloudinaryImageId} alt="logo" />
                <div className="details"> 
                    <h2 className="details-name">{name}</h2>
                    <div className="rating1">
                        <div className="star"><i className="fa fa-star" aria-hidden="true"></i></div>
                        <h2 className="rating2">{avgRating}</h2>
                    </div>
                    <h3 className="cuisines">
                        {cuisines?.join(" , ")}
                    </h3>
                </div>
            </div>
        </div>
    )
}

export const withOpenedLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div className="open-restaurant-card">
                <label>Open</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}

export const withClosedLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div>
                <label>Closed</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard 


