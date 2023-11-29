import { useDispatch } from "react-redux"
import { CLOUDINARYIMAGEID_URL } from "../utils/config"
import { addItem } from "../utils/cartSlice"

const Itemlist = ({items}) =>{
    const dispatch = useDispatch()
    const handleAddItem =(item)=>{
        dispatch(addItem(item))
    }
    return(
        <div>
            {items.map(item =>
            <div className="menu-info" key={item?.card?.info?.id } data-testid="foodItems"> 
                <div className="individual-menu">
                    <h2 className="name">{item?.card?.info?.name}</h2>
                    <h3 className="cost">₦{ item?.card?.info?.price? Math.ceil(item?.card?.info?.price/100): Math.ceil(item?.card?.info?.defaultPrice)}</h3>
                    <h3>{item?.card?.info?.description}</h3>
                </div>
                <div className="img-btn">
                    <img src={CLOUDINARYIMAGEID_URL + item?.card?.info?.imageId} alt="menu-image" />
                    <button onClick={()=> handleAddItem(item)}>Add +</button>
                </div>
            </div>
            )}
        </div>
    )
}
export default Itemlist