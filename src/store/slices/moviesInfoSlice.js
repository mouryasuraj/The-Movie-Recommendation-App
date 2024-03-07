import { createSlice } from "@reduxjs/toolkit";

const moviesInfoSlice = createSlice({
    name: 'moviesInfo',
    initialState: {
        movieDetails: null,
        movieCredits: null
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        },
        addMovieCredits: (state, action) => {
            state.movieCredits = action.payload
        }
    }
})

export const { addMovieDetails, addMovieCredits } = moviesInfoSlice.actions
export default moviesInfoSlice.reducer;