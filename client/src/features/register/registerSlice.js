import { createSlice } from '@reduxjs/toolkit'
import { serverApi } from '../../utils/api'

const initialState = {
    user: {
        name: "",
        email: "",
        password: ""
    },
}

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = { ...state.user, ...payload }
        }
    },
})

export const { setUser } = registerSlice.actions

export const registerUser = (user) => {
    return async () => {
        await serverApi({
            method: 'post',
            url: '/register',
            data: user
        })
    }
}

export default registerSlice.reducer