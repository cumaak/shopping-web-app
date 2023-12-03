import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

interface Product {
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
interface ProductsState {
    products: Array<Product>
}
const initialState : ProductsState = {
    products: []
}
export const getProducts = createAsyncThunk('products/category', async (category: string) => {
    const {data} = await axios.get(`https://dummyjson.com/products/category/${category}`)
    return data.products
})

export const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getProducts.fulfilled, (state,action) => {
            state.products = action.payload
        })
    }
})

export default productsSlice.reducer