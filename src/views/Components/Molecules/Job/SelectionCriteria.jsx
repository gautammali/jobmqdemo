import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setStep } from '../../../../features/job/jobSlice';
import { useDeleteCriteriaMutation, useGetAllCriteriaQuery } from '../../../../features/selectionCriteria/selectionApi';
import Loading from '../../Atoms/Alert/Loading';
import Modal from '../../Atoms/Modal/Modal';
import JobSelectionFrom from './JobSelectionFrom';
import NextPrev from './NextPrev';

export default function SelectionCriteria() {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const { id, forceSelectionCriteria } = useSelector(state => state.job.data)
  
    useEffect(() => {
        if (!id) {
            dispatch(setStep(0))
            alert("please post a job first")
        }
    }, [dispatch, id])

  const { data, isLoading, isError, error } = useGetAllCriteriaQuery(id)

  useEffect(() => {
    if (!forceSelectionCriteria) {
      dispatch(setStep(2))
    }
  }, [forceSelectionCriteria, dispatch])



  let content = null;
  if (isLoading) {
    content = <div className='min-h-[50vh] flex justify-center items-center'><Loading /></div>
  }
  if (!isLoading && isError) {
    content = <p>{error}</p>
  }
  if (!isLoading && !isError && data?.data?.length === 0) {
    content = <div className='min-h-[50vh] flex justify-center items-center'><p className='text-center font-bold text-gray-500'>No Found data</p></div>
  }

  if (!isLoading && !isError && data?.data?.length > 0) {
    content = data?.data?.map((item,id) => <Single key={id} {...item} />)
  }



  return (
    <div className="border p-5">
      <div className="flex justify-between items-center">
        <h2 className='text-2xl text-[#051532] mb-3'>Job Selection Criteria</h2>

        <Modal open={open} setOpen={setOpen}>
          <JobSelectionFrom setOpen={setOpen} />
        </Modal>
        <button onClick={() => setOpen(true)} className='btn-outline'>Add New</button>
      </div>

      <div className="">
        {content}
      </div>
      <NextPrev />
    </div>
  )
}



const Single = (props) => {
  const { selectionCriteriaId, mandatory, question } = props
  const [open, setOpen] = useState(false)
  const [deleteCriteria] = useDeleteCriteriaMutation()

  const handleDelete = () => {
    deleteCriteria(selectionCriteriaId)
  }

  return (
    <div className="border px-5 py-3 mt-3 flex justify-between items-center">
      <div className="">
        <p>{question}</p>
        <small>Mandatory: {mandatory ? "Yes" : "No"}</small>
      </div>
      <div className="col-span-2 flex justify-center items-center gap-2">
        <p onClick={() => setOpen(true)} className='font-semibold text-sky-700 hover:underline cursor-pointer'>Edit</p>
        <p onClick={() => handleDelete()} className='font-semibold text-red-700 hover:underline cursor-pointer'>Delete</p>
      </div>

      <Modal open={open} setOpen={setOpen}>
        <JobSelectionFrom prevData={props} setOpen={setOpen} />
      </Modal>
    </div>
  )
}
