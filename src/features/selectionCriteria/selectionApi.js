import { toast } from "react-toastify";
import { SelectionCriteria } from "../../theme/api";
import { apiSlice } from "../api/apiSlice";


export const selectionApi = apiSlice.injectEndpoints({

    endpoints: (builder) => ({

        getAllCriteria: builder.query({
            query: (id) => SelectionCriteria + `/${id}`,
            keepUnusedDataFor: 600,
            providesTags: ["Criteria"],
        }),
        postCriteria: builder.mutation({
            query: (data) => ({
                url: SelectionCriteria,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Criteria"],
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
        updateCriteria: builder.mutation({
            query: (data) => ({
                url: SelectionCriteria,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Criteria"],
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
        deleteCriteria: builder.mutation({
            query: (id) => ({
                url: SelectionCriteria + `/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Criteria"],
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


export const { useGetAllCriteriaQuery,useDeleteCriteriaMutation,usePostCriteriaMutation,useUpdateCriteriaMutation } = selectionApi