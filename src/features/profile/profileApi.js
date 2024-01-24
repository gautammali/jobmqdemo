import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { userLoggedOut } from "../auth/authSlice";


export const profileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getProfileDetails: builder.query({
            query: () => `/candidate/details`,
            keepUnusedDataFor: 600,
            providesTags: ["Details"],
        }),
        getProfileStatus: builder.query({
            query: () => `/user/profileStatus`,
            keepUnusedDataFor: 600,
            providesTags: ["Status"],
        }),
        updateProfileStatus: builder.mutation({
            query: (data) => ({
                url: '/update/profileStatus',
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Details", "Status"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        profileUpdate: builder.mutation({
            query: (data) => ({
                url: '/update/candidate',
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Details", "Status"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        changePassword: builder.mutation({
            query: (data) => ({
                url: '/user/resetpassword',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Details"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        deactiveAccount: builder.mutation({
            query: (isDeactivate) => ({
                url: `/account/deactivate/${isDeactivate}`,
                method: "POST"
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }
                    dispatch(userLoggedOut())
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        notifyMethod: builder.mutation({
            query: (data) => ({
                url: "/settings/notifyMethod",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Details"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        profileVisible: builder.mutation({
            query: (data) => ({
                url: "/settings/ProfileVisible",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Details"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }

                } catch (err) {
                    // do nothing 
                }
            }
        }),

    }),
})


export const { useProfileUpdateMutation, useGetProfileDetailsQuery, useGetProfileStatusQuery, useUpdateProfileStatusMutation, useChangePasswordMutation, useDeactiveAccountMutation, useNotifyMethodMutation,useProfileVisibleMutation } = profileApi