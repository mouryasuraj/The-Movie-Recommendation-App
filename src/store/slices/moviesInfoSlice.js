import { createSlice } from "@reduxjs/toolkit";

const moviesInfoSlice = createSlice({
    name: 'moviesInfo',
    initialState: {
        movieDetails: null,
        movieCredits: null,
        movieVideos: null
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetails = action.payload
        },
        addMovieCredits: (state, action) => {
            state.movieCredits = action.payload
        },
        addMovieVideos: (state, action) => {
            state.movieVideos = action.payload
        }
    }
})

export const { addMovieDetails, addMovieCredits, addMovieVideos } = moviesInfoSlice.actions
export default moviesInfoSlice.reducer;