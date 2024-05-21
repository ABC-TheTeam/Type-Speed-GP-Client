import { configureStore } from '@reduxjs/toolkit'
import RegisterReducer from "./features/register/registerSlice"
import LoginReducer from "./features/login/loginSlice"

export const store = configureStore({
    reducer: {
        register: RegisterReducer,
        login: LoginReducer
    },
})

