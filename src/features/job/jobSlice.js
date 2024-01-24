import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined,
    step: 0,
    customMessage: undefined,
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        updateJobState: (state, action) => {
            state.data = action.payload?.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
            state.customMessage = undefined
        },
        setStep: (state, action) => {
            state.step = action.payload
        },
        setMeassage: (state, action) => {
            state.customMessage = action.payload
        },
        emptyState: (state, action) => {
            state.data = {}
            state.isSuccess = undefined
            state.message = undefined
            state.step = 0
            state.customMessage = undefined
        },

    }
})

export const { updateJobState, setStep, emptyState, setMeassage } = jobSlice.actions
export default jobSlice.reducer