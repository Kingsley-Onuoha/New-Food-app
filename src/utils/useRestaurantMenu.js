import { useEffect } from "react"
import { MENU_API } from "./config"


const useRestaurantMenu = (resId)=>{

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async() =>{
        const data = await fetch(MENU_API + resId)
        const json = await data.json()
        
    }

    return {resInfo, resMenu}
}
export default useRestaurantMenu