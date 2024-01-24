import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";


export const documentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getDocument: builder.query({
            query: ({ type, refId }) => `/document/getall/${type}/${refId}`,
            keepUnusedDataFor: 600,
            providesTags: ['Document']
        }),
        addDocument: builder.mutation({
            query: (data) => ({
                url: '/document/add',
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Document"],
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
        updateDocument: builder.mutation({
            query: (data) => ({
                url: '/document/update',
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Document"],
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
        deleteDocument: builder.mutation({
            query: (data) => ({
                url: `/document/delete/${data}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Document"],
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


export const { useGetDocumentQuery, useAddDocumentMutation, useUpdateDocumentMutation, useDeleteDocumentMutation } = documentApi