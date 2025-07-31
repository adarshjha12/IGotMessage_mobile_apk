import { createSlice } from "@reduxjs/toolkit";

interface AuthAndTheme {
    theme: "dark" | "light"
}

const initialState : AuthAndTheme = {
    theme: "light"
}

const authAndThemeSlice = createSlice({
    name: "authAndTheme",
    initialState,
    reducers: {
        setTheme(state, action){
            state.theme = action.payload
        },

        toggleTheme(state){
            state.theme = state.theme === "light"? "dark" : "light"
        }
    }
})

export const {setTheme, toggleTheme} = authAndThemeSlice.actions
export default authAndThemeSlice.reducer