import { configureStore } from '@reduxjs/toolkit'
import RegisterReducer from "./features/register/registerSlice"

export const store = configureStore({
    reducer: {
        register: RegisterReducer
    },
})

