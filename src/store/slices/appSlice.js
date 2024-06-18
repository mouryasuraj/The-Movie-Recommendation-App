import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: 'app',
    initialState: {
        allImages: null
    },
    reducers: {
        addAllImages: (state, action) => {
            state.allImages = action.payload
        }
    }
})

export const { addAllImages } = appSlice.actions

export default appSlice.reducer