import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobList: [],
  priorities: [],
};
export const jobList = (state) => state.jobList.jobList;
export const priorities = (state) => state.jobList.priorities;

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
    initialPriorities: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { addJob, synchronizationJobList, initialPriorities } =
  jobListSlice.actions;
export default jobListSlice.reducer;
