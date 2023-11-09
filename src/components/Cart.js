import EmptyCart from "./EmptyCart"
import {useSelector} from "react-redux"
import ActiveCart from "./ActiveCart"



const Cart = () => {
  const cart = useSelector((state)=> state.cart)
  return (
    <div className="cart-items">
      
     {cart.items.length == 0? (<EmptyCart />): (<ActiveCart />)
      }
    </div>
  )
}

export default Cart