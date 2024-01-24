import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const documentSlice = createSlice({
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

export const { updateState } = documentSlice.actions
export default documentSlice.reducer