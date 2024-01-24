import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import registerReducer from "../features/auth/registerSlice";
import profileReducer from "../features/profile/profileSlice";
import fileReducer from "../features/file/fileSlice";
import jobReducer from "../features/job/jobSlice";
import jobListReducer from "../features/job/jobListSlice";
import jobApplyReducer from "../features/job/applyJobSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    register: registerReducer,
    profile: profileReducer,
    file: fileReducer,
    job: jobReducer,
    jobList: jobListReducer,
    applyJob: jobApplyReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
