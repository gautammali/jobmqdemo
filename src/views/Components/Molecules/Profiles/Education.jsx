import React, { useState } from 'react';
import { MdSchool } from 'react-icons/md';
import { useGetProfileDetailsQuery } from '../../../../features/profile/profileApi';
import { useDeleteQualificationeMutation } from '../../../../features/qualification/qualificationApi';
import Modal from '../../Atoms/Modal/Modal';
import EducationForm from './Forms/EducationForm';

const Education = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const education = data?.data.candidateQualifications

    return (
        <div className='border p-5'>
            <h2 className='text-2xl text-[#051532] mb-3'>Education</h2>
            <div className="flex flex-col gap-4 pb-4 mb-4 border-b">
                <p>Showcase your education to stand out from other job seekers and help employers find you.</p>

            </div>
            <div className="mb-5">
                {
                    education?.map((item, id) => <SingleEducation key={id} data={item} />)
                }
            </div>

            <Modal open={open} setOpen={setOpen}>
                <EducationForm
                    setOpen={setOpen}
                    lineNo={education?.length}
                />
            </Modal>
            <button onClick={() => setOpen(true)} className='btn-outline'>Add a qualification</button>
        </div>
    );
};

export default Education;



const SingleEducation = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [deleteQualificatione] = useDeleteQualificationeMutation()
    const handleDelete = () => {
        alert("are you sure to delete this item")
        deleteQualificatione({
            ...data,
            levelOfEducation: data?.levelOfEducation[0]?.valueID,
        })
    }
    return (
        <div className="grid grid-cols-12 py-8 border-b px-5">
            <div className="col-span-2">
                <MdSchool className='text-2xl text-gray-500' />
            </div>
            <div className="col-span-8">
                <h6>{data?.levelOfEducation}</h6>
                <p>{data?.institute}</p>
                <p>{data?.yearCompleted}</p>
                <p className=' text-clip'>{data?.description}</p>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <EducationForm setOpen={setOpen}
                    lineNo={data.lineNo} prevData={data} />
            </Modal>
            <div className="col-span-2 flex justify-center items-center gap-2">
                <p onClick={() => setOpen(true)} className='font-semibold text-sky-700 hover:underline cursor-pointer'>Edit</p>
                <p onClick={() => handleDelete()} className='font-semibold text-red-700 hover:underline cursor-pointer'>Delete</p>
            </div>
        </div>
    )
}
