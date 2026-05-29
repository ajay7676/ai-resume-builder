import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem("resume-token") || null,
    loading: false,
};

const authSlice = createSlice({
    name: "authresume",
    initialState,

    reducers: {
        setCredentails: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("resume-token");
        },
    },
})

export const {setCredentails,logOut} = authSlice.actions;

export default authSlice.reducer;
