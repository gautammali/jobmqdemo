import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    data: {},
    isSuccess: undefined,
    message: undefined
}

const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.data = action.payload?.data;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        }
    }
})

export const { updateState } = profileSlice.actions
export default profileSlice.reducer