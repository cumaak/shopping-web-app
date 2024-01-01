import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { IProduct, IProductState } from "../../types/Types"

interface ICartListState {
    products: Array<IProductState>
}

const initialState: ICartListState = {
    products: JSON.parse(localStorage.getItem("cartList") || "[]")
}

const increment = (state: ICartListState, action: PayloadAction<IProduct>) => {
    const index = state.products.findIndex((product) => product.product.id == action.payload.id)
    state.products[index].amount += 1
    localStorage.setItem("cartList", JSON.stringify(state.products))
}
const decrement = (state: ICartListState, action: PayloadAction<IProduct>) => {
    const index = state.products.findIndex((product) => product.product.id == action.payload.id)
    if (state.products[index].amount > 1) {
        state.products[index].amount -= 1
        localStorage.setItem("cartList", JSON.stringify(state.products))
    }
}

export const cartListSlice = createSlice({
    name: "cartList",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<IProduct>) => {
            if (state.products.some((product) => product.product.id == action.payload.id)) {
                increment(state, action)
            } else {
                state.products = [{ product: action.payload, amount: 1 }, ...state.products]
                localStorage.setItem("cartList", JSON.stringify(state.products))
            }
        },
        deleteFromCart: (state, action: PayloadAction<IProduct>) => {
            state.products = state.products.filter((product) => product.product.id !== action.payload.id)
            localStorage.setItem("cartList", JSON.stringify(state.products))
        },
        incrementAmount: (state, action: PayloadAction<IProduct>) => {
            increment(state, action)
        },
        decrementAmount: (state, action: PayloadAction<IProduct>) => {
            decrement(state, action)
        }
    }
})

export const { addToCart, deleteFromCart, incrementAmount, decrementAmount } = cartListSlice.actions
export default cartListSlice.reducer