import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        showDetails: false,
        popularMovies: null
    },
    reducers: {
        toggleShowDetails: (state) => {
            state.showDetails = !state.showDetails
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        }
    }
});

export const { toggleShowDetails } = moviesSlice.actions;
export default moviesSlice.reducer;