import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface Product {
    product: {
        id: number,
        title: string,
        description: string,
        price: number,
        discountPercentage: number,
        rating: number,
        stock: number,
        brand: string,
        category: string,
        thumbnail: string,
        images: Array<string>
    }
}
const initialState: Product = {
    product: {
        id: 0,
        title: "",
        description: "",
        price: 0,
        discountPercentage: 0,
        rating: 0,
        stock: 0,
        brand: "",
        category: "",
        thumbnail: "",
        images: []
    }
}

export const getProduct = createAsyncThunk("products/id", async (id: number) => {
    const { data } = await axios.get(`https://dummyjson.com/products/${id}`)
    return data
})

export const singleProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProduct.fulfilled, (state, action) => {
            state.product = action.payload
        })
    }
})

export default singleProductSlice.reducer