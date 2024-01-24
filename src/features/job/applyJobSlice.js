import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  questionsAnswers: [],
  applicationAttachments: [],
  EmployerQuestions: false,
  YourProfile: false,
  SupportingInformation: false,
  ReviewAndSubmit: false,
  step: 1,
};

const jobApplySlice = createSlice({
  name: "jobApply",
  initialState,
  reducers: {
    updateNextStep: (state, action) => {
      switch (action.payload) {
        case "EmployerQuestions":
          state.SupportingInformation = true;
          state.step = 2;
          break;
        case "SupportingInformation":
          state.SupportingInformation = true;
          state.step = 3;
          break;
        case "ReviewAndSubmit":
          state.ReviewAndSubmit = true;
          break;

        default:
          break;
      }
    },
    setStep: (state, action) => {
      state.step = action.payload;
    },
    setApplicationAttachments: (state, action) => {
      state.applicationAttachments = action.payload;
    },
    setQuestionsAnswers: (state, action) => {
      state.questionsAnswers = action.payload;
    },
    jobApplyReset: (state) => {
      state.questionsAnswers = [];
      state.applicationAttachments = [];
      state.EmployerQuestions = false;
      state.YourProfile = false;
      state.SupportingInformation = false;
      state.ReviewAndSubmit = false;
      state.step = 1;
    },
   
  },
});

export const {
  updateNextStep,
  setStep,
  setQuestionsAnswers,
  setApplicationAttachments,
  jobApplyReset,
} = jobApplySlice.actions;
export default jobApplySlice.reducer;
