import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/Types"

interface ICartListState {
    products: Array<IProduct>
}

const initialState: ICartListState = {
    products: JSON.parse(localStorage.getItem("cartList") || "[]")
}

export const cartListSlice = createSlice ({
    name: "cartList",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            state.products.unshift(action.payload)
            localStorage.setItem("cartList", JSON.stringify(state.products))
        },
        deleteFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product)=> product.id !== action.payload.id)
            localStorage.setItem("cartList", JSON.stringify(state.products))
        }
    }
})

export const {addToCart, deleteFromCart} = cartListSlice.actions
export default cartListSlice.reducer