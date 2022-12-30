import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobList: [],
};
export const jobList = (state) => state.jobList.jobList;

const jobListSlice = createSlice({
  name: "jobList",
  initialState: initialState,
  reducers: {
    synchronizationJobList: (state, action) => {
      const localStorageJobList = JSON.parse(localStorage.getItem("jobList"));

      if (
        localStorageJobList != null &&
        state.jobList.length != localStorageJobList.length
      ) {
        state.jobList = localStorageJobList;
      }
    },
    addJob: (state, action) => {
      state.jobList.push(action.payload);

      localStorage.setItem("jobList", JSON.stringify(state.jobList));
    },
  },
});

export const { addJob, synchronizationJobList } = jobListSlice.actions;
export default jobListSlice.reducer;
