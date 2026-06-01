import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    token: localStorage.getItem("resume-token") || null,
    loading: false,
    error: null,
};

const authSlice = createSlice({
    name: "authresume",
    initialState,

    reducers: {
        setCredentials: (state,action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
         setError: (state, action) => {
            state.error = action.payload;
        },
        logOut: (state) => {
            state.user = null;
            state.token = null;
            localStorage.removeItem("resume-token");
        },
    },
})

export const {setCredentials,setError,logOut} = authSlice.actions;

export default authSlice.reducer;
