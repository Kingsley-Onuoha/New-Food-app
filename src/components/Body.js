import React from "react"
import ReactDOM from "react-dom/client"
import RestaurantCard, { withClosedLabel, withOpenedLabel } from "./RestaurantCard"
import { useState, useEffect } from "react"
import { MENU_API, resList } from "../utils/config"
import Shimmer from "./Shimmer"
import { Link } from "react-router-dom"
import { RES_LIST_API } from "../utils/config"




const Body = () =>{
   const [restaurantAPI, setRestaurantAPI] = useState([]) 

   const [filteredRestaurantAPI, setFilteredRestaurantAPI] = useState([])

   const [searchText, setSearchText] = useState("")

   const RestaurantCardWithOpenLabel = withOpenedLabel(RestaurantCard)

   const RestaurantCardWithClosedLabel = withClosedLabel(RestaurantCard)



   useEffect(() =>{
    fetchData()
   },[])

  const fetchData = async () => {

    const data = await fetch(RES_LIST_API);
    const json = await data.json();

    let restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (restaurants === undefined) {
      restaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
    setRestaurantAPI(restaurants);

    let filteredRestaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    if (filteredRestaurants === undefined) {
      filteredRestaurants = json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    }
    setFilteredRestaurantAPI(filteredRestaurants);
  };
  
  return restaurantAPI === undefined ||restaurantAPI.length === 0 ? <Shimmer /> : (
              <div className="body">
                <div className="input"><input type="text" value={searchText} data-testid="searchInput" onChange={(e)=>{
                    setSearchText(e.target.value)
                  }} />
                  <button onClick={()=>{
                    let searchedRestaurant = restaurantAPI.filter((rest) => rest.info.name.toLowerCase().includes(searchText.toLowerCase()) );
                      setFilteredRestaurantAPI(searchedRestaurant)
                  }}>
                    Search</button>
                </div>
                <div className="filter-title">
                  <h1>Restaurants with online food delivery in Lagos</h1>
                </div>
                
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
                    Low Rated Restaurants
                  </button>
                </div>
                <div className="body-restaurant">{filteredRestaurantAPI.map((restaurant)=>(
                  <Link className="link" key={restaurant.info.id} to={"/restaurants/"+ restaurant.info.id}>
                    {restaurant.info.availability.opened?(< RestaurantCardWithOpenLabel resData={restaurant}/>):(<RestaurantCardWithClosedLabel resData={restaurant}/>)}
                  </Link>
                  ))}
                </div>              
              </div>
    )
}
export default Body