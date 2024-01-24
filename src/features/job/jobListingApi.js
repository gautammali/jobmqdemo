import { apiSlice } from "../api/apiSlice";
import { updateFilter } from "./jobListSlice";

export const jobListingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getJobDetails: builder.query({
      query: (jobId) => `/JobListing/jobdetail/${jobId}`,
      keepUnusedDataFor: 600,
      providesTags: ["JobList"],
    }),

    jobListing: builder.mutation({
      query: (data) => ({
        url: "/JobListing",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["JobList"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
         await queryFulfilled;
          dispatch(updateFilter({...arg}));
        } catch (err) {
          // do nothing
        }
      },
    }),
  }),
});

export const { useGetJobDetailsQuery, useJobListingMutation } = jobListingApi;
