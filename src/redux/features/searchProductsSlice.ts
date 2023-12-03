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
interface ResultsState {
    products: Array<Product>
}
const initialState : ResultsState = {
    products: []
}
export const getSearchResults = createAsyncThunk('products/search', async (keyword: string) => {
    const {data} = await axios.get(`https://dummyjson.com/products/search?q=${keyword}`)
    return data.products
})

export const searchProductsSlice = createSlice({
    name: "searcResults",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getSearchResults.fulfilled, (state,action) => {
            state.products = action.payload
        })
    }
})

export default searchProductsSlice.reducer