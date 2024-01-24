import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { updateState } from "./referencesSlice";


export const referencesApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({


        addReferences: builder.mutation({
            query: (data) => ({
                url: '/candidate/references',
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
        updateReferences: builder.mutation({
            query: (data) => ({
                url: '/candidate/references',
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
        deleteReferences: builder.mutation({
            query: (data) => ({
                url: '/candidate/references',
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


export const { useAddReferencesMutation,useUpdateReferencesMutation,useDeleteReferencesMutation} = referencesApi