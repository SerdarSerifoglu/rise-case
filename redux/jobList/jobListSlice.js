import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobListFilter: { name: "", priority: "" },
  jobList: [],
  priorities: [],
};
export const jobList = (state) =>
  state.jobList.jobList.filter((e) => {
    const filter = state.jobList.jobListFilter;
    if (filter.name != "" && filter.priority != "") {
      return (
        e.jobName.includes(filter.name) && e.jobPriority == filter.priority
      );
    } else if (filter.name != "") {
      return e.jobName.includes(filter.name);
    } else if (filter.priority != "") {
      return e.jobPriority == filter.priority;
    } else {
      return true;
    }
  });
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
    updateJobListFilter: (state, action) => {
      const { key, value } = action.payload;
      state.jobListFilter[key] = value;
    },
    clearJobListFilter: (state, action) => {
      state.jobListFilter = { name: "", priority: "" };
    },
    sortJobList: (state, action) => {
      if (action.payload) {
        state.jobList = state.jobList.sort((a, b) =>
          a.jobName.localeCompare(b.jobName)
        );
      } else {
        state.jobList = state.jobList.sort((a, b) =>
          b.jobName.localeCompare(a.jobName)
        );
      }
    },
  },
});

export const {
  addJob,
  synchronizationJobList,
  initialPriorities,
  updateJobListFilter,
  clearJobListFilter,
  sortJobList,
} = jobListSlice.actions;
export default jobListSlice.reducer;
