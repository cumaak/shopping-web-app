import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { ICategories } from "../../types/Types"

const initialState: ICategories = {
    categories: []
}

export const getCategories = createAsyncThunk('categories', async () =>{
    const {data} = await axios.get<Array<string>>('https://dummyjson.com/products/categories')
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