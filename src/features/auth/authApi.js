import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";


export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        login: builder.mutation({
            query: (data) => ({
                url: '/auth/token',
                method: "POST",
                body: data,
            }),
            invalidatesTags: [
                "Resume",
                "Keyword",
                "JobKeyword",
                "Details",
                "Status",
                "Document",
                "Criteria",
                "Jobs",
                "JobList",
                "AppliedJobs",
                "Applicants",
                "jobStatus",
                "Reports"
            ],
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem("auth", JSON.stringify({
                        accessToken: result.data.token.accessToken,
                        refreshToken: result.data.token.refreshToken,
                        user: result.data.token
                    }))

                    dispatch(userLoggedIn({
                        accessToken: result.data.token.accessToken,
                        refreshToken: result.data.token.refreshToken,
                        user: result.data.token
                    }))
                } catch (err) {
                    // do nothing 
                }
            }
        }),
    }),
})


export const { useLoginMutation } = authApi