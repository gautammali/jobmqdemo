import { currency, finalJobPost, jobPost, jobUpdate } from "../../theme/api";
import { apiSlice } from "../api/apiSlice";
import { setMeassage, setStep, updateJobState } from "./jobSlice";


export const jobApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getCurrency: builder.query({
            query: () => currency,
            keepUnusedDataFor: 600,
            providesTags: ["Jobs"],
        }),
        getAllJobs: builder.query({
            query: () => jobPost,
            keepUnusedDataFor: 600,
            providesTags: ["Jobs"],
        }),
        getSingleJob: builder.query({
            query: (id) => jobPost + `/${id}`,
            keepUnusedDataFor: 600,
            providesTags: (result, error, arg) => [{ type: 'Jobs', id: result?.data?.id }],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    if (result?.data?.data?.id) {
                        dispatch(updateJobState({
                            ...result.data
                        }))
                    }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        createJob: builder.mutation({
            query: (data) => ({
                url: jobPost,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Jobs"],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    if (result?.data?.data?.id) {
                        dispatch(updateJobState({
                            ...result.data
                        }))
                    }
                    if (result?.data?.data?.forceSelectionCriteria) {
                        dispatch(setStep(1))
                    } else {
                        dispatch(setStep(2))
                    }
                } catch (err) {
                    // do nothing 
                }
            }
        }),
        updateJob: builder.mutation({
            query: (data) => ({
                url: jobUpdate,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (result, error, arg) => [{ type: 'Jobs', id: result?.data?.id }],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;


                    if (result?.data?.data?.id) {
                        dispatch(updateJobState({
                            ...result.data
                        }))
                    }
                    if (result?.data?.data?.forceSelectionCriteria) {
                        dispatch(setStep(1))
                    } else {
                        dispatch(setStep(2))
                    }

                } catch (err) {
                    // do nothing 
                }
            }
        }),
        finalJobPost: builder.mutation({
            query: (id) => ({
                url: finalJobPost + `/${id}`,
                method: "GET",
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;



                    if (result?.data?.data?.id) {
                        dispatch(updateJobState({
                            ...result.data
                        }))
                       
                    }
                    if (!result?.data?.isSuccess) {
                        dispatch(setMeassage(result?.data?.message))
                        window.scroll(0, 0)
                    }


                } catch (err) {
                    // do nothing 
                }
            }
        }),
    }),
})


export const { useGetCurrencyQuery, useGetAllJobsQuery, useGetSingleJobQuery, useCreateJobMutation, useUpdateJobMutation, useFinalJobPostMutation } = jobApi