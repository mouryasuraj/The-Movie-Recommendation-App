import { createSlice } from "@reduxjs/toolkit";

const moviesInfoSlice = createSlice({
    name: 'moviesInfo',
    initialState: {
        movieDetails: null
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        }
    }
})

export const { addMovieDetails } = moviesInfoSlice.actions
export default moviesInfoSlice.reducer;