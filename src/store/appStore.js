import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import moviesReducer from './slices/moviesSlice'
import moviesInfoReducer from './slices/moviesInfoSlice'

const appStore = configureStore({
    reducer: {
        theme: themeReducer,
        movies: moviesReducer,
        moviesInfo: moviesInfoReducer
    }
});

export default appStore;