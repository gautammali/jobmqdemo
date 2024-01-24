import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const resumeSlice = createSlice({
    name: "resume",
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        }
    }
})

export const { updateState } = resumeSlice.actions
export default resumeSlice.reducer