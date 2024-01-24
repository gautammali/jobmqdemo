import React from 'react'
import { useGetAppliedJobStatusQuery } from '../../../../../features/job/applyJobApi'
import moment from 'moment';

export default function History({ id }) {
    const { data, isLoading, isError, error } = useGetAppliedJobStatusQuery(id)
    console.log(data);
    let content = null;
    if (isLoading) {
        // content = <Loading />;
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>;
    }
    if (!isLoading && !isError && data?.data?.length === 0) {
        content = <tr>
            <td rowSpan={5} className='flex justify-center items-center min-h-[200px] text-center'>No Found data</td>
        </tr>;
    }

    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data.map((item, key) => <tr key={key} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item?.applicationId}
            </th>
            <td className="px-6 py-4">
                {item?.jobId}
            </td>
            <td className="px-6 py-4">
                {item?.candidateID}
            </td>
            <td className="px-6 py-4">
                {moment(item?.date).format("D MMM YYYY")}
            </td>
            <td className="px-6 py-4">
                {item?.status}
            </td>
        </tr>)
    }
    return (

        <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <thead className="text-xs uppercase bg-site-bg-300 text-white">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Application ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            JOB ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            LineNo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            ActionDate
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {content}

                </tbody>
            </table>
        </div>

    )
}
