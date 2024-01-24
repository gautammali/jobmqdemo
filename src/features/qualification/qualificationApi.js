import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { updateState } from "./qualificationSlice";


export const qualificationApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addQualification: builder.mutation({
            query: (data) => ({
                url: '/candidate/qualification',
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
        updateQualification: builder.mutation({
            query: (data) => ({
                url: '/candidate/qualification',
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
                   
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        deleteQualificatione: builder.mutation({
            query: (data) => ({
                url: '/candidate/qualification',
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
                   
                } catch (err) {
                    // do nothing 
                }
            }
        }),
    }),
})


export const { useAddQualificationMutation, useUpdateQualificationMutation, useDeleteQualificationeMutation } = qualificationApi