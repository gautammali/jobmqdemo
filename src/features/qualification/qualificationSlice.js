import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const qualificationSlice = createSlice({
    name: "qualification",
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        }
    }
})

export const { updateState } = qualificationSlice.actions
export default qualificationSlice.reducer