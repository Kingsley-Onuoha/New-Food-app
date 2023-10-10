import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { resList } from "../utils/config"



const Body = () =>{
   const [restaurantAPI, setRestaurantAPI] = useState([]) 

   useEffect(() =>{
    fetchData()
   },[])

   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()

    console.log(json)

    setRestaurantAPI(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
    return(
        <div className="body">
                <h1>Restaurants with online food delivery in Lagos</h1>
                <div className="filters">
                  <button className="filter-btn" onClick={()=>{
                   let filteredRestaurants = restaurantAPI.filter((res)=>res.info.avgRating > 4)
                   setRestaurantAPI(filteredRestaurants)
                    }}>
                    Top Rated Restaurants
                  </button>
                  <button className="filter-btn" onClick={()=>{
                   let filteredRestaurants = restaurantAPI.filter((res)=>res.info.avgRating < 4)
                   setRestaurantAPI(filteredRestaurants)
                    }}>
                    Lowest Rated Restaurants
                  </button>
                </div>
                <div className="body-restaurant">{restaurantAPI.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}</div>
                
        </div>
    )
}
export default Body