import { useEffect, useState } from "react"
import { json } from "react-router-dom"
import Shimmer from "./Shimmer"
import { CLOUDINARYIMAGEID_URL } from "../utils/config"
import { useParams } from "react-router-dom"
import { MENU_API } from "../utils/config"


const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null)

    const [resMenu, setResMenu] = useState(null)

    const {resId} = useParams()

    useEffect(()=>{
        fetchMenu()
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_API+ resId +"&catalog_qa=undefined&submitAction=ENTER")
        
        const json = await data.json()

        setResInfo(json?.data?.cards[0]?.card?.card?.info)

        setResMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards)
    }

    return (resInfo === null)? <Shimmer />:(
        <div className="menu">
            <div className="info-rating">
                <div className="info">
                    <h1>{resInfo?.name}</h1>    
                    <h3>{resInfo?.cuisines.join(" , ")}</h3>    
                    <h3>{resInfo?.areaName} , {resInfo.sla?.lastMileTravelString}</h3>           
                </div>
                <div className="rating">
                    <span>
                        <i className="fa fa-star" aria-hidden="true"></i><h1>{resInfo?.avgRating}</h1>
                    </span>
                    <h4>{resInfo?.totalRatingsString}</h4>
                </div> 
            </div>
            <div className="delivery">
                <span>
                    <i className="fa fa-bicycle" aria-hidden="true"></i><h2>{resInfo?.feeDetails?.message}</h2>
                </span>
            </div>
            
            <div>
                <h1>Menu</h1>
            </div>

            <div>
                {resMenu.map(items =>{
                return(
                <div className="menu-details" key={items?.card?.info?.id}>
                    
                    <div className="info">
                        <h2>{items?.card?.info?.name}</h2>
                        <h4> Rs. {items?.card?.info?.price/100}</h4>
                        <h3>{items?.card?.info?.description}</h3>
                    </div>
                    <div className="menu-image">
                        <img src={CLOUDINARYIMAGEID_URL+ items?.card?.info?.imageId} alt="menu-photo"/>
                        <button>ADD + </button>
                    </div>
    
                </div>
                )
            })}
            </div>
        </div>
    )
}
export default RestaurantMenu