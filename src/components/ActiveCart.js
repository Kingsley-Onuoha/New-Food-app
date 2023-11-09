import { useSelector } from "react-redux"
import { CLOUDINARYIMAGEID_URL } from "../utils/config"
import { Link } from "react-router-dom"

const ActiveCart = () =>{
    const cart = useSelector((state)=> state.cart)

    console.log(cart.items)
    return(
        <div className="cart-container">
            <div className="cart-title">
                <h2>Cart Items</h2>
            </div>
            <div className="added-cart-items">
                {cart?.items?.map(items=>(
                    <div className="items-in-cart" key={items?.card?.info?.id}>
                        <div className="cart-info">
                            <div className="added-cart-img">
                                <img src={CLOUDINARYIMAGEID_URL + items?.card?.info?.imageId} alt={items?.card?.info?.name}/>
                               <div className ="details">
                                    <h3>{items?.card?.info?.name}</h3>
                                    <p>{items?.card?.info?.description}</p>
                                    <button className="remove">Remove</button>
                                </div>
                            </div>
                            <div className="cart-product-price">
                                <h3>Price:  ₦ {Math.ceil(items?.card?.info?.price/100)}</h3>
                                <div className="increment">
                                    <h4>Quantity:  </h4>
                                    <div className="increment-btn">
                                        <button> - </button>
                                        <h3>{items?.cartQuantity}</h3>
                                        <button> + </button>
                                    </div>
                                </div>
                                <h3>Total Price:  ₦ {Math.ceil(items?.card?.info?.price/100)*items?.cartQuantity}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            <div className="cart-summary">
                <div className="btn">
                    <button className="clear-cart">Clear Cart</button>
                </div>
                <div className="cart-checkout">
                    <div className="sub-total">
                        <h3>Subtotal</h3> 
                        <h3 className="total-amount">{cart?.totalAmount}</h3> 
                    </div>
                    <h4 className="free-delivery">Delivery is free Nationwide</h4>
                    <button className="checkout">Check out</button>
                    <Link to="/" className="link">
                        <div className="continue-shopping">
                            <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                            <h4>Continue Shopping</h4>
                        </div>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default ActiveCart