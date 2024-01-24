import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { emptyState } from '../../../features/job/jobSlice'
import JobPost from '../../Components/Molecules/Job/JobPost'
import SelectionCriteria from '../../Components/Molecules/Job/SelectionCriteria'
import JobAttechment from '../../Components/Molecules/Job/JobAttechment'
import Steps from '../../Components/Molecules/Job/Steps'
import SuccessJobPosted from '../../Components/Molecules/Job/SuccessJobPosted'
import JobKeywords from '../../Components/Organisms/Job/Businesses/JobKeywords'

export default function CreateJob() {
    const { step } = useSelector(state => state.job)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(emptyState())
    }, [dispatch])

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    return (
        <div className='container'>
            <Steps />
            <div className="bg-white">
                <div className="mx-auto max-w-5xl py-10">
                    {step === 0 && <JobPost />}
                    {step === 1 && <SelectionCriteria />}
                    {step === 2 && <JobAttechment />}
                    {step === 3 && <JobKeywords />}
                    {step === 4 && <SuccessJobPosted />}
                </div>
            </div>

        </div>
    )
}
