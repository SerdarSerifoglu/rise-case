import { createSlice } from "@reduxjs/toolkit";

export const IsLoading = (state) => state.general.isLoading;

const initialState = {
  jobList: [],
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState: initialState,
  reducers: {
    addJob: (state, action) => {
      state.jobList.push(action.payload);
    },
  },
});

export const { addJob } = jobListSlice.actions;
export default jobListSlice.reducer;
