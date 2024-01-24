import React from 'react'
import { MdDone } from 'react-icons/md'
import { AiOutlineClose } from 'react-icons/ai'
import { BsQuestionLg } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../../features/job/jobSlice'



export default function Steps() {
    const { step, data } = useSelector(state => state.job)
    const dispatch = useDispatch()
    const handleselection = () => {
        if (data?.forceSelectionCriteria) {
            dispatch(setStep(1))
        }
    }
    // useEffect(() => {
    //     if (!forceSelectionCriteria) {
    //       dispatch(setStep(2))
    //     }
    //   }, [forceSelectionCriteria, dispatch])
    return (

        <div className="container py-4">
            <div className="mx-4 p-4">
                <div className="flex items-center">

                    <div onClick={() => dispatch(setStep(0))} className="flex items-center text-white relative cursor-pointer">

                        {(step < 0 && <InComplete />) || (step === 0 && <Active />) || (step >= 0 && <Done />)}

                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-semibold uppercase text-black">Job Details</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>

                    <div onClick={handleselection} className="flex items-center text-white relative cursor-pointer">

                        {(step < 1 && <InComplete />) || (step === 1 && <Active />) || (step >= 1 && <Done />)}

                        <div className="absolute top-0 -ml-10 text-center mt-16 w-max text-xs font-semibold uppercase text-black">Selection Criteria</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                    <div onClick={() => dispatch(setStep(2))} className="flex items-center text-white relative cursor-pointer">

                        {(step < 2 && <InComplete />) || (step === 2 && <Active />) || (step >= 2 && <Done />)}

                        <div className="absolute top-0 -ml-10 text-center mt-16 w-36 text-xs font-semibold uppercase text-black">Atteched Document</div>
                    </div>

                    <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                    <div onClick={() => dispatch(setStep(3))} className="flex items-center text-white relative cursor-pointer">

                        {(step < 3 && <InComplete />) || (step === 3 && <Active />) || (step >= 3 && <Done />)}

                        <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-semibold uppercase text-black">Job dimenssions</div>
                    </div>
                </div>
            </div>

        </div>
    )
}




const Active = () => {
    return (
        <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-sky-600 border-sky-600 flex items-center justify-center">
            <BsQuestionLg className='text-2xl' />
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