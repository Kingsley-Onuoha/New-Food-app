import { configureStore} from "@reduxjs/toolkit"
import cartReducer, { getTotals } from './cartSlice'


const appStore = configureStore({
    reducer:{
        cart: cartReducer
    },

})

export default appStore

