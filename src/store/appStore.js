import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slices/themeSlice'
import moviesReducer from './slices/moviesSlice'
import moviesInfoReducer from './slices/moviesInfoSlice'
import appReducer from './slices/appSlice'

const appStore = configureStore({
    reducer: {
        app:appReducer,
        theme: themeReducer,
        movies: moviesReducer,
        moviesInfo: moviesInfoReducer
    }
});

export default appStore;