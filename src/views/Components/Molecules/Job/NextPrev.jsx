import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFinalJobPostMutation } from '../../../../features/job/jobApi'
import { setStep } from '../../../../features/job/jobSlice'

export default function NextPrev() {
    const { step, data } = useSelector(state => state.job)
    const { forceSelectionCriteria } = useSelector(state => state.job.data)
    const [finalJobPost] = useFinalJobPostMutation()

    const dispatch = useDispatch()

    const prevFun = () => {
        if (!forceSelectionCriteria) {
            dispatch(setStep(0))
        } else {
            dispatch(setStep(step - 1))
        }
    }
    const nextFun = () => {
        dispatch(setStep(step + 1))
    }
    const confrimFun = () => {
        finalJobPost(data?.id).unwrap().then(res => {
            if (res.isSuccess) {
                dispatch(setStep(4))
            }else{
                dispatch(setStep(3))
            }
        })
    }


    return (
        <div className="flex justify-between items-center mt-10">

            <button onClick={() => prevFun()} className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1">Previous</button>

            {step <= 2 ? <button onClick={() => nextFun()} className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1">Next</button>
                :
                <button onClick={() => confrimFun()} className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1">Confirm</button>}
        </div>
    )
}
