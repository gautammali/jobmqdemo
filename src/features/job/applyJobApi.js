import { toast } from "react-toastify";
import { apiSlice } from "../api/apiSlice";
import { jobApplyReset } from "./applyJobSlice";

export const jobApplyApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAllApplicants: builder.query({
      query: () => "/job/AppliedJobApplication",
      keepUnusedDataFor: 600,
      providesTags: ["Applicants", "AppliedJobs"],
    }),

    getAppliedJobStatus: builder.query({
      query: (id) => `/job/StatusHistory/${id}`,
      keepUnusedDataFor: 600,
      providesTags: ["JobStatus"],
    }),
    updateAppliedJob: builder.mutation({
      query: (data) => ({
        url: "/appliedjob/update",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AppliedJobs"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.isSuccess) {
            toast.success(result?.data?.message)
          }
          if (!result?.data?.isSuccess) {
            toast.warning(result?.data?.message)
          }
        } catch (err) {
          // do nothing
        }
      },
    }),

    bulkUpdateAppliedJob: builder.mutation({
      query: (data) => ({
        url: "/job/BulkUpdateAppliedJob",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["AppliedJobs"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          if (result?.data?.isSuccess) {
            toast.success(result?.data?.message)
          }
          if (!result?.data?.isSuccess) {
            toast.warning(result?.data?.message)
          }
        } catch (err) {
          // do nothing
        }
      },
    }),
    finalJobApply: builder.mutation({
      query: (data) => ({
        url: "/applyjob",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result?.data?.isSuccess);

          if (result.data.isSuccess === false) {
            dispatch(jobApplyReset());
            window.scroll(0, 0);
            // alert(result?.data?.message);
          }

          if (
            result?.data?.message === "Saved Successfully." &&
            result?.data?.isSuccess
          ) {
            dispatch(jobApplyReset());
          }
        } catch (err) {
          // do nothing
        }
      },
    }),
    updatejob: builder.mutation({
      query: (data) => ({
        url: "/updatejob",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["AppliedJobs"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          console.log(result?.data?.isSuccess);

          if (result.data.isSuccess === false) {
            dispatch(jobApplyReset());
            window.scroll(0, 0);
            // alert(result?.data?.message);
          }

          if (
            result?.data?.message === "Saved Successfully." &&
            result?.data?.isSuccess
          ) {
            dispatch(jobApplyReset());
          }
        } catch (err) {
          // do nothing
        }
      },


    }),
  }),
});

export const {
  useGetAllApplicantsQuery,
  useFinalJobApplyMutation,
  useUpdatejobMutation,
  useGetAppliedJobStatusQuery,
  useUpdateAppliedJobMutation,
  useBulkUpdateAppliedJobMutation,
} = jobApplyApi;
