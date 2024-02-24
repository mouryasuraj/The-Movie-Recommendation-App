import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: false
    },
    reducers: {
        toggleTheme: (state) => {
            state.theme = !state.theme
        }
    }
})

export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer