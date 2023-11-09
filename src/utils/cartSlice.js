import { createSlice } from "@reduxjs/toolkit"
import {toast }from "react-toastify"


const cartSlice = createSlice({
name:"cart",
initialState:{
    items:localStorage.getItem("items")?JSON.parse(localStorage.getItem("items")):[],
    totalQuantity: 0,
    totalAmount : 0,
},
reducers:{
    addItem: (state, action)=>{
        const itemIndex = state.items.findIndex((item)=> item.card.info.id == action.payload.card.info.id)
        if(itemIndex >=0){
            state.items[itemIndex].cartQuantity += 1
            toast.info(`${state.items[itemIndex].card.info.name} quauntity was increased in cart`,{
                position: "bottom-center",
            })
        }else{
            const tempProduct ={...action.payload, cartQuantity: 1};
            state.items.push(tempProduct)
            toast.success(`${action.payload.card.info.name} was added to cart`,{
                position: "bottom-center",
            })
        }
        localStorage.setItem("items", JSON.stringify(state.items))
    },
    removeItem: (state)=>{
        state.items.pop()
    },
    clearCart: (state)=>{
        state.items.length = 0
    }

}
})
export const {addItem, removeItem, clearCart} = cartSlice.actions

export default cartSlice.reducer