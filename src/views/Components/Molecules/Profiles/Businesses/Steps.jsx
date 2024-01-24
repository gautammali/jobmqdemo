import React from 'react'
import { MdDone } from 'react-icons/md'
import { GiSandsOfTime } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useGetProfileStatusQuery } from '../../../../../features/profile/profileApi'

// 1	InActive
// 2	Email Verfiy
// 3	Document Under Review
// 4	Document Approved
// 5	Reject
// 6	Approved
export default function Steps() {
    const { data: step } = useGetProfileStatusQuery()
    const { data } = step || {}

    return (
        <div className="container py-4">
            <div className="mx-4 p-4">
                <div className="flex items-center">

                    <div className="flex items-center text-white relative">
                        {
                            (data?.emailVerifiy === 0 && <InComplete />) ||
                            (data?.emailVerifiy === 1 && <Done />)
                        }
                        <div className="absolute top-1 -ml-10 text-center mt-16 w-32 text-xs font-semibold uppercase text-black">{data?.emailVerifiy === 1 ? <span className='text-green-500'>Email Verification</span> : "Email Verification"}</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>

                    <div className="flex items-center text-white relative">
                        {
                            ((data?.submiT_LEGAL_VERIFICATION === 0 || data?.profileStatus === 4) && <Pending />) ||
                            (data?.submiT_LEGAL_VERIFICATION === 1 && data?.profileStatus !== 4 && <Done />)
                        }
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-max text-xs font-semibold uppercase text-black">{
                            ((data?.submiT_LEGAL_VERIFICATION === 0 || data?.profileStatus === 4) && <span className='text-sky-500'>Submit Documents</span>) ||
                            (data?.submiT_LEGAL_VERIFICATION === 1 && data?.profileStatus !== 4 && <span className='text-green-500'>Under Verification	</span>)

                        }</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                    <div className="flex items-center text-white relative">
                        {
                            ((data?.profileStatus === 0 || data?.profileStatus === 1) && <Pending />) ||
                            (data?.profileStatus === 5 && <InComplete />) ||
                            (data?.profileStatus === 6 && <Done />)
                        }
                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-semibold uppercase text-black">{
                            ((data?.profileStatus === 0 || data?.profileStatus === 1) && <span className='text-sky-500'>Pending</span>) ||
                            (data?.profileStatus === 5 && <span className='text-red-500'>Rejected</span>) ||
                            (data?.profileStatus === 6 && <span className='text-green-500'>Approved</span>)
                        }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}



const Pending = () => {
    return (
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-sky-600 border-sky-600 flex items-center justify-center">
            <GiSandsOfTime className='text-2xl' />
        </div>
    )
}
const Done = () => {
    return (
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600 flex items-center justify-center">
            <MdDone className='text-3xl' />
        </div>
    )
}
const InComplete = () => {
    return (
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-red-600 border-red-600 flex items-center justify-center">
            <AiOutlineClose className='text-3xl' />
        </div>
    )
}