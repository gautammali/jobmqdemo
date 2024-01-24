import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const fileSlice = createSlice({
    name: "profileUpdate",
    initialState,
    reducers: {
        updateFileState: (state, action) => {
            state.data = action.payload.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        },
        clearFileState: (state, action) => {
            state.data = {};

        }
    }
})

export const { updateFileState, clearFileState } = fileSlice.actions
export default fileSlice.reducer