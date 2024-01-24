import React, { useEffect, useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../../../features/job/jobSlice'
import { useGetJobKewordsQuery } from '../../../../../features/keyword/keywordApi'
import Loading from '../../../Atoms/Alert/Loading'
import Modal from '../../../Atoms/Modal/Modal'
import NextPrev from '../../../Molecules/Job/NextPrev'
import GetForm from './GetForm'

export default function JobKeywords() {
    const { data: stateData, customMessage } = useSelector(state => state.job)
    const { id } = stateData
    const dispatch = useDispatch()
    useEffect(() => {
        if (!id) {
            dispatch(setStep(0))
            alert("please post a job first")
        }
    }, [dispatch, id])
    const { data: resumeData, isLoading, isError } = useGetJobKewordsQuery(id)
    const { data } = resumeData || {}
    let content = null
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && isError) {
        content = 'error'
    }
    if (!isLoading && !isError && data?.length > 0) {
        content = data.map((item, id) => <Single key={id} item={item} prevItem={data[id - 1]} lineNo={id} />)
    }


    return (
        <div className='border p-5'>
            {customMessage && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative my-3" role="alert">
                <strong className="font-bold">Warning! </strong>
                <span className="block sm:inline">{customMessage}</span>

            </div>}
            <h2 className='text-2xl text-[#051532] mb-3'>Job dimenssions</h2>
            {content}

            <NextPrev />

        </div>
    );
};






const Single = ({ item, lineNo, prevItem }) => {
    const [open, setOpen] = useState(false)
    return (
        <div className="flex flex-col gap-1 mb-3 border-b pb-3">
            <div className="flex justify-between items-center">
                <h6 className='text-[#051532] font-semibold'>{item.kwName}</h6>
                <div onClick={() => setOpen(true)} className="cursor-pointer hover:text-sky-500 rounded-full hover:bg-gray-100 border p-2 transition_1">
                    <AiOutlineEdit className='text-xl' />
                </div>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <GetForm name={item.kwName} setOpen={setOpen}
                    lineNo={lineNo} item={item} prevItem={prevItem} />
            </Modal>
            <p onClick={() => setOpen(true)} className='text-[#4f4f4f]'>{item.kwValueName === null ? "No data found here" : item.kwValueName}</p>
        </div>
    )
}
