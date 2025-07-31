import { configureStore } from "@reduxjs/toolkit";
import authAndThemeReducer from "../slices/authAndTheme"

export const store = configureStore(
    {
        reducer: {
            authAndTheme : authAndThemeReducer
        }
    }
)

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch; 