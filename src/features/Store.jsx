import { configureStore } from "@reduxjs/toolkit";
import UserDetailReducer from "./UserDetailSlice"

export const store = configureStore({
    reducer: {
        userdetails: UserDetailReducer
    }
})