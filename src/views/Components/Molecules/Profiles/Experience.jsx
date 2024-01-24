import React, { useState } from 'react';
import moment from 'moment/moment';
import { useGetProfileDetailsQuery } from '../../../../features/profile/profileApi';
import Modal from '../../Atoms/Modal/Modal';
import ExperienceForm from './Forms/ExperienceForm';
import { MdWorkOutline } from 'react-icons/md'
import { useDeleteExperienceMutation } from '../../../../features/experience/experienceApi';

const Experience = () => {
    const [open, setOpen] = useState(false)
    const { data } = useGetProfileDetailsQuery()
    const experiences = data?.data?.candidateExperiences || []
    return (
        <div className='border p-5'>
            <h2 className='text-2xl text-[#051532] mb-3'>Experience</h2>
            <div className="flex flex-col gap-4 pb-4 mb-4">
                <p>Add your experience to attract employers to your profile and help us match you to relevant job opportunities. This could be previous jobs, volunteering or even caring responsibilities.</p>

            </div>

            <div className="mb-5">
                {
                    experiences?.map((item, id) => <SingleExperience key={id} data={item} />)
                }
            </div>
            <Modal open={open} setOpen={setOpen}>
                <ExperienceForm  setOpen={setOpen}
                    lineNo={experiences.length} />
            </Modal>
            <button onClick={() => setOpen(true)} className='btn-outline'>Add an experience</button>
        </div>
    );
};

export default Experience;












export const SingleExperience = ({ data }) => {
    const [open, setOpen] = useState(false)
    const [deleteExperience] = useDeleteExperienceMutation()
    const handleDelete = () => {
        alert("are you sure to delete this item")
        deleteExperience(data)
    }
    return (
        <div className="grid grid-cols-12 py-8 border-b px-5">
            <div className="col-span-2 ">
                <MdWorkOutline className='text-2xl text-gray-500' />
            </div>
            <div className="col-span-8">
                <h6>{data?.designation}</h6>
                <p>{data?.company}</p>
                <p>{moment(data?.startDate).format("DD MMM  YYYY")} - {data?.currentlyInRole?"currently working there":moment(data?.endDate).format("DD MMM  YYYY")}</p>
            </div>
            <Modal open={open} setOpen={setOpen}>
                <ExperienceForm setOpen={setOpen}
                    lineNo={data.lineNo} prevData={data} />
            </Modal>
            <div className="col-span-2 flex justify-center items-center gap-2">
                <p onClick={() => setOpen(true)} className='font-semibold text-sky-700 hover:underline cursor-pointer'>Edit</p>
                <p onClick={() => handleDelete()} className='font-semibold text-red-700 hover:underline cursor-pointer'>Delete</p>
            </div>
        </div>
    )
}
