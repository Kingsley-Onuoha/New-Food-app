import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"
import { CLOUDINARYIMAGEID_URL, MENU_API_DESKTOP, MENU_API_MOBILE} from "../utils/config"
import { json, useParams } from "react-router-dom"
import RestaurantCategory from "./RestaurantCategory"


const RestaurantMenu = () =>{

    const [resInfo, setResInfo] = useState(null)

    const [resMenu, setResMenu] = useState(null)

    const [newMenu, setNewMenu] = useState([])

    const [showIndex, setShowIndex] = useState(0)

    const {resId} = useParams()


    useEffect(()=>{
        fetchMenu()
    }, [])



    
    const fetchMenu = async ()=>{

        if(800<=window.screen.height){
            const data = await fetch(MENU_API_MOBILE+ resId +"&isMenuUx4=true&submitAction=ENTER")
            var json = await data.json(); 

            setResInfo(json?.data?.cards[2]?.card?.card?.info)

            var menuCards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards

            var categories = menuCards?.filter(c=> c?.card?.card?.itemCards !== undefined)
            setResMenu(categories)
            
        }
        else{
            const data = await fetch(MENU_API_DESKTOP+ resId +"&catalog_qa=undefined&submitAction=ENTER")
            var json = await data.json(); 

            setResInfo(json?.data?.cards[0]?.card?.card?.info)

            var menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

            var categories = menuCards?.filter(c=> c?.card?.card?.itemCards !== undefined)
            setResMenu(categories)
        }

        
        // const data = await fetch(MENU_API+ resId +"&catalog_qa=undefined&submitAction=ENTER")
        
        // const json = await data.json()

        // setResInfo(json?.data?.cards[0]?.card?.card?.info)

        // let menuCards = json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards

        // if(menuCards === undefined){
        //     menuCards = json?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
        // }

        // const categories = menuCards.filter(c=> c?.card?.card?.itemCards !== undefined)
        // setResMenu(categories)
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
                <span className="message">
                    <i className="fa fa-bicycle" aria-hidden="true"></i><h2>{resInfo?.feeDetails?.message}</h2>
                </span>
            </div>
            <div> 
                {resMenu.map((category, index) => <RestaurantCategory key={category?.card?.card.title} data= {category?.card?.card} showItems={index ==showIndex} setShowIndex={()=>{setShowIndex(showIndex === index? null : index)}}/>)}
            </div>
        </div>
    ) 
}
export default RestaurantMenu