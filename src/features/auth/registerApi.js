import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";
import { enterAnEmail } from "./registerSlice";


export const registerApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        enterEmail: builder.mutation({
            query: (data) => ({
                url: '/candidate/register',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        signupEmployer: builder.mutation({
            query: (data) => ({
                url: '/signup/employer',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        verify: builder.mutation({
            query: (data) => ({
                url: '/candidate/verify',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        resendotp: builder.mutation({
            query: (data) => ({
                url: '/candidate/resendotp',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        createPassword: builder.mutation({
            query: (data) => ({
                url: '/candidate/createpassword',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        externalUser: builder.mutation({
            query: (data) => ({
                url: '/register/ExternalUser',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    console.log(result);
                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.accessToken,
                        refreshToken: result.data.refreshToken,
                        user: result.data
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.accessToken,
                        refreshToken: result.data.refreshToken,
                        user: result.data
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        forgotPassword: builder.mutation({
            query: (data) => ({
                url: '/user/forgotpassword',
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        email: result?.data.data,
                        isSuccess: result?.data.isSuccess,
                        message: result?.data.message
                    }))

                    dispatch(enterAnEmail({
                        email: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))

                } catch (err) {
                    // do nothing 
                }
            }
        }),
    }),
})


export const { useEnterEmailMutation, useSignupEmployerMutation, useVerifyMutation, useResendotpMutation, useCreatePasswordMutation, useExternalUserMutation, useForgotPasswordMutation } = registerApi