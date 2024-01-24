import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    email: undefined,
    isSuccess: undefined,
    message: undefined,
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers: {
        enterAnEmail: (state, action) => {
            state.email = action.payload.email;
            state.isSuccess = action.payload.isSuccess;
            state.message = action.payload.message;
        }
    }
})

export const { enterAnEmail } = registerSlice.actions
export default registerSlice.reducer