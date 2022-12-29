import { createSlice } from "@reduxjs/toolkit";

export const IsLoading = (state) => state.general.isLoading;

const initialState = {
  test: false,
};

const jobListSlice = createSlice({
  name: "jobList",
  initialState: initialState,
  reducers: {},
});

export const {} = jobListSlice.actions;
export default jobListSlice.reducer;
