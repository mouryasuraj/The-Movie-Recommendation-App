import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import moviesReducer from './slices/moviesSlice'

const appStore = configureStore({
    reducer: {
        theme: themeReducer,
        movies: moviesReducer
    }
});

export default appStore;