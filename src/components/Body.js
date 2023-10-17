import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard from "./RestaurantCard"
import { useState, useEffect } from "react"
import { resList } from "../utils/config"
import Shimmer from "./Shimmer"




const Body = () =>{
   const [restaurantAPI, setRestaurantAPI] = useState([]) 

   const [filteredRestaurantAPI, setFilteredRestaurantAPI] = useState([])

   const [searchText, setSearchText] = useState("")

   useEffect(() =>{
    fetchData()
   },[])

   const fetchData = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json()

    setRestaurantAPI(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantAPI(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   }
    return restaurantAPI?.length === 0? <Shimmer />: (
        <div className="body">
                <div className="input">
                  <input type="text" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value)
                  }} />
                  <button onClick={()=>{
                    let searchedRestaurant = restaurantAPI.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                      setFilteredRestaurantAPI(searchedRestaurant)
                  }}>
                    Search</button>
                </div>
                <h1>Restaurants with online food delivery in Lagos</h1>
                <div className="filters">
                  <button className="filter-btn" onClick={()=>{
                   let filteredRestaurants = filteredRestaurantAPI.filter((res)=>res.info.avgRating > 4)
                   setFilteredRestaurantAPI(filteredRestaurants)
                    }}>
                    Top Rated Restaurants
                  </button>
                  <button className="filter-btn" onClick={()=>{
                   let filteredRestaurants = filteredRestaurantAPI.filter((res)=>res.info.avgRating < 4)
                   setFilteredRestaurantAPI(filteredRestaurants)
                    }}>
                    Lowest Rated Restaurants
                  </button>
                </div>
                <div className="body-restaurant">{filteredRestaurantAPI?.map((restaurant)=>(<RestaurantCard key={restaurant.info.id} resData={restaurant}/>))}</div>
                
        </div>
    )
}
export default Body