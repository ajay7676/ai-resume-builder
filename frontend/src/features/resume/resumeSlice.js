import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    resumes: [],
    selectedResume: null,
    loaading: false,
    error: null,
};

const resumeSlice = createSlice ({

    name: "resume",
    initialState,
    reducers: {
        addResume: (state, action) => {
        state.resumes.unshift(action.payload);
        },
        setResumes: (state,action) =>{
            state.resumes = action.payload;
        },
        setLoading: (state , action) => {
            state.loaading = action.payload;
        },
        setError : (state,action) =>{
            state.error = action.payload;
        }
    }

})

export const {addResume,setResumes,setLoading,setError} = resumeSlice.actions;

export default resumeSlice.reducer;