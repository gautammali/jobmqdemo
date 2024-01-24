import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import JobPost from '../../Components/Molecules/Job/JobPost'
import SelectionCriteria from '../../Components/Molecules/Job/SelectionCriteria'
import Steps from '../../Components/Molecules/Job/Steps'
import JobKeywords from '../../Components/Organisms/Job/Businesses/JobKeywords'
import { useGetSingleJobQuery } from '../../../features/job/jobApi'
import Loading from '../../Components/Atoms/Alert/Loading'
import SuccessJobPosted from '../../Components/Molecules/Job/SuccessJobPosted'
import { setStep } from '../../../features/job/jobSlice'
import JobAttechment from '../../Components/Molecules/Job/JobAttechment'


export default function Updatejob() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { step } = useSelector(state => state.job)
    const { data, isLoading, isError, error } = useGetSingleJobQuery(id)

    useEffect(() => {
        dispatch(setStep(0))
    }, [dispatch])
    
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [step]);

    let content = null
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = <p>{error}</p>
    }

    if (!isLoading && !isError && !data?.isSuccess && data?.data === null) {
         navigate('/businesses/job')
    }
    if (!isLoading && !isError && data?.data?.id) {
        content = <>
            <Steps />
            <div className="bg-white">
                <div className="mx-auto max-w-5xl py-10">
                    {step === 0 && <JobPost prevData={data?.data} />}
                    {step === 1 && <SelectionCriteria />}
                    {step === 2 && <JobAttechment />}
                    {step === 3 && <JobKeywords />}
                    {step === 4 && <SuccessJobPosted />}
                </div>
            </div>
        </>


    }

    return( <div className='container'>{content}</div>)
}
