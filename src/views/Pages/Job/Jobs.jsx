import React from 'react'
import { useGetAllJobsQuery } from '../../../features/job/jobApi'
import Loading from '../../Components/Atoms/Alert/Loading'
import JobCard from '../../Components/Molecules/Job/JobCard'



export default function Jobs() {
    const { data, isLoading, isError, error } = useGetAllJobsQuery()

    let content = null;
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }
    if (!isLoading && !isError && data?.data?.length === 0) {
        content = <p>No Found data</p>
    }

    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data?.map((item) => <JobCard key={item.id} {...item} />)
    }

    return (

        <div className="flex flex-col gap-4 py-5 container">
            {content}
        </div>
    )
}
