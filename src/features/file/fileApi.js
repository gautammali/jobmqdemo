import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { updateFileState } from "./fileSlice";


export const fileApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getFilePath: builder.query({
            query: (id) => `/file/path/${id}`,
            keepUnusedDataFor: 600,
            providesTags: ["Details"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(updateFileState({
                        data: result.data.data,
                        isSuccess: result.data.isSuccess,
                        message: result.data.message
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),

        uploadFile: builder.mutation({
            query: (data) => ({
                url: '/Upload',
                method: "POST",
                body: data,
             
            }),
            invalidatesTags: ["Details"],
        }),

        deleteFile: builder.mutation({
            query: (id) => ({
                url: `/file/path/${id}`,
                method: "DELETE",
                body: id,
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
        })
    }),
})


export const { useGetFilePathQuery,useUploadFileMutation,useDeleteFileMutation } = fileApi