import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDeleteDocumentMutation, useGetDocumentQuery } from '../../../../features/document/documentApi'
import { useGetFilePathQuery } from '../../../../features/file/fileApi'
import Modal from '../../Atoms/Modal/Modal'
import AdditionalDocumentsForm from './Forms/AdditionalDocumentsForm'

export default function AdditionalDocuments() {
    const [open, setOpen] = useState(false)
    const { userId } = useSelector(state => state.auth.user)
    const { data, isError, isLoading, error } = useGetDocumentQuery({ type: 1, refId: userId })
    // const { data, isError, isLoading, error } = useGetDocumentQuery()

    let content = {}

    if (isLoading) {
        content = <div>Loading ....</div>
    }
    if (!isLoading && isError) {
        content = <div>{error}</div>
    }
    if (!isLoading && !isError && data?.data?.length === 0) {
        content = <div>-</div>
    }
    if (!isLoading && !isError && data?.data?.length > 0) {
        content = data?.data?.map((item, id) => <Single item={item} key={id} />)
    }

    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Additional documents</h4>
                <p className='text-[#646464] font-normal'>You can upload up to 10 documents to use in your job applications, such as cover letters or examples of your work.</p>
                <p className='text-[#646464] font-normal'>You haven't uploaded any additional documents.</p>

                <div className="py-3">{content}</div>

                <Modal open={open} setOpen={setOpen}>
                    <AdditionalDocumentsForm setOpen={setOpen} lineNo={data?.data?.length} />
                </Modal>
                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Add additional document</button>
                </div>
            </div>
        </div>
    )
}



const Single = ({ item }) => {
    const { data } = useGetFilePathQuery(item.filePath)
    const [open, setOpen] = useState(false)
    const [deleteDocument] = useDeleteDocumentMutation()
    const handleDelete = () => {
        alert("are you sure to delete this item")
        deleteDocument(item.id)
    }
    return (
        <div className='flex justify-between items-center p-4 rounded-md border border-gray-200 mb-2'>
            <Modal open={open} setOpen={setOpen}>
                <AdditionalDocumentsForm setOpen={setOpen} prevData={item} />
            </Modal>

            <div className="flex flex-col gap-2">
                <p className='text-lg capitalize'>{item.title}</p>
                <p className=' font-semibold text-blue-800 hover:underline cursor-pointer'>{data?.data?.fileName}</p>
            </div>
            <div className="flex gap-2 items-center">
                <p onClick={() => setOpen(true)} className='text-lg font-semibold text-blue-800 hover:underline cursor-pointer'>Edit</p>
                <p onClick={handleDelete} className='text-lg font-semibold text-blue-800 hover:underline cursor-pointer'>Delete</p>
            </div>
        </div>
    )
}