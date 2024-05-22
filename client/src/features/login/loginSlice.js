import { createSlice } from '@reduxjs/toolkit'
import { serverApi } from '../../utils/api'

const initialState = {
    user: {
        email: "",
        password: ""
    },
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.user = { ...state.user, ...payload }
        }
    },
})

export const { setUser } = loginSlice.actions

export const loginUser = (user) => {
    return async () => {
        let { data } = await serverApi({
            method: 'post',
            url: '/login',
            data: user
        })
        localStorage.setItem("access_token", data.access_token)
        localStorage.setItem("email", data.email)
    }
}

export default loginSlice.reducer