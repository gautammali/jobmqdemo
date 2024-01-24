/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useGetProfileDetailsQuery, useProfileUpdateMutation } from '../../../features/profile/profileApi';
import Modal from '../../../views/Components/Atoms/Modal/Modal';
import useUploadFile from '../../../views/Components/Atoms/utils/useUploadFile';

export default function UploadProfilePic() {
    const [open, setOpen] = useState(false)

    const { data: profileData } = useGetProfileDetailsQuery()


    return (
        <div>
            <div className="flex flex-col gap-2 items-center">
                <span className="inline-block h-14 w-14 overflow-hidden rounded-full">
                    {profileData?.data?.profilePic ?
                        <img src={`https://api.jobmq.com/file/${profileData?.data?.profilePic}`} alt="" />
                        : <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                    }
                </span>

                <Modal open={open} setOpen={setOpen}>
                    <UpdateProfileFrom setOpen={setOpen} prevData={profileData?.data} />
                </Modal>
                <input
                    type="button"
                    value={"Change"}
                    onClick={() => setOpen(true)}
                    className="rounded-md border border-gray-300 bg-white py-1 px-2 text-xs  leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                />
            </div>
        </div>
    )
}

const UpdateProfileFrom = ({ setOpen, prevData }) => {
    const [profileUpdate, { data }] = useProfileUpdateMutation()
    const { fileName } = useSelector(state => state.file.data)
    // upload file 
    const { handleUploadFile } = useUploadFile()
    function handleChange(event) {
        const formData = new FormData();
        formData.append(`formFiles`, event.target.files[0]);
        handleUploadFile(formData)
    }

    const onSubmit = () => {
        if (!fileName) {
            return
        }
        profileUpdate({
            ...prevData,
            profilePic: fileName
        });
    }

    if (data?.isSuccess) {
        setOpen(false)
    }
    return (

        <form>
            <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Update your profile pic</h3>


            <div className="sp space-y-4 py-5">
                <label htmlFor="profilePic" className="block mb-2 text-base font-bold text-gray-900">Select file</label>
                <input type={"file"} onChange={handleChange} name="profilePic" className=" border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5" />

            </div>

            <div className="">
                <button
                    disabled={!fileName}
                    onClick={() => onSubmit()}
                    type="button"
                    className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                >
                    Save
                </button>
                <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
                    onClick={() => setOpen(false)}

                >
                    Cancel
                </button>
            </div>
        </form>
    )
}
