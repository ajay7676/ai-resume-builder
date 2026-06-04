import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  resumes: [],
  selectedCurrentResume: null,
  currentStep: 1,
  loaading: false,
  error: null,
};

const resumeSlice = createSlice({
  name: "resume",
  initialState,
  reducers: {
    addResume: (state, action) => {
      state.resumes.unshift(action.payload);
    },
    setResumes: (state, action) => {
      state.resumes = action.payload;
    },
    setLoading: (state, action) => {
      state.loaading = action.payload;
    },
    setCurrentResume: (state, action) => {
      state.selectedCurrentResume = action.payload;
    },
    updateCurrentResume: (state, action) => {
      state.selectedCurrentResume = action.payload;
      s;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const {
  addResume,
  setResumes,
  setCurrentResume,
  updateCurrentResume,
  setLoading,
  setError,
} = resumeSlice.actions;

export default resumeSlice.reducer;
