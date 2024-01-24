import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const experienceSlice = createSlice({
    name: "profileUpdate",
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        }
    }
})

export const { updateState } = experienceSlice.actions
export default experienceSlice.reducer