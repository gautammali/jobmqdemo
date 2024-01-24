import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { updateState } from "./experienceSlice";


export const experienceApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        addExperience: builder.mutation({
            query: (data) => ({
                url: '/candidate/experience',
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
        updateExperience: builder.mutation({
            query: (data) => ({
                url: '/candidate/experience',
                method: "PUT",
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
        deleteExperience: builder.mutation({
            query: (data) => ({
                url: '/candidate/experience',
                method: "DELETE",
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
    }),
})


export const { useAddExperienceMutation, useUpdateExperienceMutation, useDeleteExperienceMutation } = experienceApi