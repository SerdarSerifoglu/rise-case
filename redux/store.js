import { configureStore } from "@reduxjs/toolkit";
import jobListSliceReducer from "./jobList/jobListSlice";

export const store = configureStore({
  reducer: {
    jobList: jobListSliceReducer,
  },
});
