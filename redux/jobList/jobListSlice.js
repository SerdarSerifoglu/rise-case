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
    sortJobListName: (state, action) => {
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
    sortJobListPriority: (state, action) => {
      if (action.payload) {
        state.jobList = state.jobList.sort(
          (a, b) => a.jobPriority - b.jobPriority
        );
      } else {
        state.jobList = state.jobList.sort(
          (a, b) => b.jobPriority - a.jobPriority
        );
      }
    },
    deleteJobByUID: (state, action) => {
      for (let i = 0; i < state.jobList.length; i++) {
        if (state.jobList[i].uid === action.payload) {
          state.jobList.splice(i, 1);
        }
      }

      localStorage.setItem("jobList", JSON.stringify(state.jobList));
    },

    updateJobByUID: (state, action) => {
      const { uid, updateDataPart } = action.payload;
      for (let i = 0; i < state.jobList.length; i++) {
        if (state.jobList[i].uid === uid) {
          state.jobList[i] = {
            ...state.jobList[i],
            ...updateDataPart,
          };
        }
      }

      localStorage.setItem("jobList", JSON.stringify(state.jobList));
    },
  },
});

export const {
  addJob,
  synchronizationJobList,
  initialPriorities,
  updateJobListFilter,
  clearJobListFilter,
  sortJobListName,
  sortJobListPriority,
  deleteJobByUID,
  updateJobByUID,
} = jobListSlice.actions;
export default jobListSlice.reducer;
