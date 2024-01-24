import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  keyword: "",
  location: "",
  minSalary: 0,
  maxSalary: 0,
  jobSearchKeyWords: [],
  pageSize: 10,
  pageNo: 1,
  companyId: 0,
  sortOrder: "",
  sortBy: "",
};

const jobListSlice = createSlice({
  name: "joblist",
  initialState,
  reducers: {
    updateFilter: (state, action) => {
      state.keyword = action.payload.keyword;
      state.location = action.payload.location;
      state.pageSize = action.payload.pageSize;
      state.pageNo = action.payload.pageNo;
      state.maxSalary = action.payload.maxSalary;
      state.minSalary = action.payload.minSalary;
      state.sortOrder = action.payload.sortOrder;
      state.sortBy = action.payload.sortBy;
    },
    updateCompanyId: (state, action) => {
      state.companyId = action.payload;
    },
    clearFilter: (state) => {
      state.jobSearchKeyWords = [];
    },
    updateJobSearchKeywords: (state, action) => {
      const keywords = state.jobSearchKeyWords;
      const exits = keywords.find(
        (i) => i.keyworkId === action.payload.keyworkId
      );
      if (!exits) {
        state.jobSearchKeyWords.push(action.payload);
      } else {
        const filterData = state.jobSearchKeyWords.filter(
          (i) => i.keyworkId !== action.payload.keyworkId
        );
        state.jobSearchKeyWords = [...filterData, action.payload];
      }
    },
  },
});

export const {
  updateFilter,
  clearFilter,
  updateCompanyId,
  updateJobSearchKeywords,
} = jobListSlice.actions;
export default jobListSlice.reducer;
