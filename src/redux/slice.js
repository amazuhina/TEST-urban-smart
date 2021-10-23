import {createSlice} from "@reduxjs/toolkit";
import {dataChecking} from "../auth";



const checkLogin = (state) => {
    const checkLogin = dataChecking(state.data.login, state.data.password)

    if (checkLogin) {
        state.isDisabled = false
    } else if(!state.isDisabled) {
        state.isDisabled = true
    }
}



const dataSlice = createSlice({
    name: 'dataSlice',

    initialState: {
        data: {
            login: '',
            password: ''
        },
        isAuth: false,
        isDisabled: true
    },


    reducers: {
        setValueLogin: (state, action) => {
            state.data.login = action.payload

            checkLogin(state)
        },
        setValuePassword: (state, action) => {
            state.data.password= action.payload

            checkLogin(state)
        },

        signIn: (state) => {
            state.isAuth = true
        },
    }
})




export const loginSelector = (state) => state.dataReducer.data.login

export const passwordSelector = (state) => state.dataReducer.data.password

export const isAuthSelector = (state) => state.dataReducer.isAuth

export const isDisabledSelector = (state) => state.dataReducer.isDisabled


export const {
    setValueLogin,
    setValuePassword,
    signIn
} = dataSlice.actions


export const reducer = dataSlice.reducer