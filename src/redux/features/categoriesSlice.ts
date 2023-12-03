import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


interface CategoriesState{
    categories: Array<string>
}
const initialState: CategoriesState = {
    categories: []
}

export const getCategories = createAsyncThunk('categories', async () =>{
    const {data} = await axios.get('https://dummyjson.com/products/categories')
    return data
})

export const categoriesSlice = createSlice({
    name: "categories",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state,action) => {
            state.categories = action.payload
        })
    }
})

export default categoriesSlice.reducer