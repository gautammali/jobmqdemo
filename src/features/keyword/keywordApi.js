import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";


export const keywoedApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getPostJobkewords: builder.query({
            query: () => `/post/keywords`,
            keepUnusedDataFor: 600,
            providesTags: ['Keyword']
        }),
        getKewords: builder.query({
            query: (userId) => `/candidate/resumekwvalues/${userId}`,
            keepUnusedDataFor: 600,
            providesTags: ['Keyword']
        }),
        getJobKewords: builder.query({
            query: (userId) => `/job/keywordvalues/${userId}`,
            keepUnusedDataFor: 600,
            providesTags: ['JobKeyword']
        }),
        getKeywordValues: builder.query({
            query: (id) => `/master?value=${id}`,
            keepUnusedDataFor: 600,
        }),
        getCityValues: builder.query({
            query: (id) => `/master?ParentId=${id}`,
            keepUnusedDataFor: 600,
        }),
        updateKeyword: builder.mutation({
            query: (data) => ({
                url: '/candidate/updatekeyword',
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Keyword"],

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
        updateJobKeyword: builder.mutation({
            query: (data) => ({
                url: '/job/updatekeyword',
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["JobKeyword"],

            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    // const result = await queryFulfilled;
                    // if (result.data.isSuccess) {
                    //     toast.success(result?.data?.message)
                    // }
                    // if (!result.data.isSuccess) {
                    //     toast.warning(result?.data?.message)
                    // }
                  
                } catch (err) {
                    // do nothing 
                }
            }
        }),
    }),
})


export const { 
    useGetPostJobkewordsQuery,
    useGetKewordsQuery,
    useGetJobKewordsQuery,
    useGetKeywordValuesQuery,
    useGetCityValuesQuery,
    useUpdateKeywordMutation,
    useUpdateJobKeywordMutation,
 } = keywoedApi