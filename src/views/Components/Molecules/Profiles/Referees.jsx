import React, { useState } from 'react'
import { useGetProfileDetailsQuery } from '../../../../features/profile/profileApi'
import { useDeleteReferencesMutation } from '../../../../features/references/referencesApi'
import Loading from '../../Atoms/Alert/Loading'
import Modal from '../../Atoms/Modal/Modal'
import RefereesForm from './Forms/RefereesForm'

export default function Referees() {
    const [open, setOpen] = useState(false)
    const { data, isLoading, isError } = useGetProfileDetailsQuery()
    const references = data?.data?.candidateReferences || []
    let content = null
    if (isLoading) {
        content = <Loading />
    }
    if (!isLoading && !isError && references.length === 0) {
        content = <p>You have not added any referees</p>
    }
    if (!isLoading && !isError && references.length > 0) {
        content = references?.map((item, id) => <Single key={id} item={item} />)
    }
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Referees</h4>
                <p className='text-[#646464] font-normal'>Managers, supervisors or colleagues make great referees. An employer may call them to verify your experience. Before you pass on a referee’s details, make sure you get their permission. It’s also a good idea to brief your referees about jobs you’re applying for so they can prepare before a potential employer contacts them. </p>

                <br />

                {content}



                <Modal open={open} setOpen={setOpen}>
                    <RefereesForm lineNo={references.length} setOpen={setOpen} />
                </Modal>
                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Add referee</button>
                </div>
            </div>
        </div>
    )
}



const Single = ({ item }) => {
    const { relationship, company, name, emailID, contactNo } = item
    const [open, setOpen] = useState(false)
    const [deleteExperience] = useDeleteReferencesMutation()
    const handleDelete = () => {
        alert("are you sure to delete this item")
        deleteExperience(item)
    }
    return (
        <div className="border-b px-5 flex pb-3">

            <div className="flex-1">
                <h6>{name}</h6>
                <p> {company && <span> {company}</span>} {relationship && <span> {relationship}</span>}</p>
                <p> {contactNo && <span> {contactNo}</span>} {emailID && contactNo && "-"} {emailID && <span> {emailID}</span>}</p>

                {/* <p>{moment(data?.startDate).format("DD MMM  YYYY")} - {moment(data?.endDate).format("DD MMM  YYYY")}</p> */}
            </div>

            <div className="flex justify-center items-center">
                <div className="flex gap-2">
                    <p onClick={() => setOpen(true)} className='font-semibold text-sky-700 hover:underline cursor-pointer'>Edit</p>
                    <p onClick={() => handleDelete()} className='font-semibold text-red-700 hover:underline cursor-pointer'>Delete</p>

                </div>

                <Modal open={open} setOpen={setOpen}>
                    <RefereesForm setOpen={setOpen}
                        lineNo={item.lineNo} prevData={item} />
                </Modal>
            </div>
        </div>
    )
}
