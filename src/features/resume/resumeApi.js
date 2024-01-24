import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { updateState } from "./resumeSlice";


export const resumeApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getResume: builder.query({
            query: () => `/post/resume`,
            keepUnusedDataFor: 600,
            providesTags: ['Resume']
        }),
        addResume: builder.mutation({
            query: (data) => ({
                url: `/post/resume`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Resume"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }
                    dispatch(updateState({
                        data: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        updateResume: builder.mutation({
            query: (data) => ({
                url: `/post/resume`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Resume"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result.data.isSuccess) {
                        toast.success(result?.data?.message)
                    }
                    if (!result.data.isSuccess) {
                        toast.warning(result?.data?.message)
                    }

                    dispatch(updateState({
                        data: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        })
    }),
})


export const { useGetResumeQuery, useAddResumeMutation, useUpdateResumeMutation } = resumeApi