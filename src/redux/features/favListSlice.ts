import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct } from "../../types/Types"

interface IFavListState {
    products: Array<IProduct>
}

const initialState: IFavListState = {
    products: JSON.parse(localStorage.getItem("favList") || "[]")
}

export const favListSlice = createSlice ({
    name: "favList",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<IProduct>) => {
            state.products.unshift(action.payload)
            localStorage.setItem("favList", JSON.stringify(state.products))
        },
        deleteProduct: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product)=> product.id !== action.payload.id)
            localStorage.setItem("favList", JSON.stringify(state.products))
        }
    }
})

export const {addProduct, deleteProduct} = favListSlice.actions
export default favListSlice.reducer