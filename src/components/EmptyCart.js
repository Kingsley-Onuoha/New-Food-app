import { Link } from "react-router-dom"


const EmptyCart = () =>{

    return(
        <div className="empty-cart">
            <img src={"https://img.freepik.com/premium-vector/fried-eggs-are-cooked-frying-pan-gas-burner-vector-illustration-cooking-home-pan_106796-1748.jpg"} alt="" />
            <h3>Your cart is empty</h3>
            <p>You can go to home page to view more restaurants</p>
            <Link className="link" to="/">
            <div className="continue-shopping">
                <span><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>
                <span><h4>Continue Shopping</h4></span>
            </div>
            </Link>
        </div>
    )
}
export default EmptyCart