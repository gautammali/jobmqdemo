import { apiSlice } from "../api/apiSlice";


export const reportsApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getJobsApplicationStatus: builder.query({
            query: () => `/Reports/GetJobsApplicationStatus`,
            keepUnusedDataFor: 600,
            providesTags: ['Reports']
        }),
        getActiveJobs: builder.query({
            query: () => `/Reports/GetActiveJobs`,
            keepUnusedDataFor: 600,
            providesTags: ['Reports']
        }),
        getTotalHire: builder.query({
            query: () => `/Reports/GetTotalHire`,
            keepUnusedDataFor: 600,
            providesTags: ['Reports']
        }),
    }),
})


export const {
    useGetJobsApplicationStatusQuery,
    useGetActiveJobsQuery,
    useGetTotalHireQuery
 } = reportsApi