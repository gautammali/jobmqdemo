import React, { useState } from 'react'
import { useGetProfileDetailsQuery, useNotifyMethodMutation } from '../../../../../features/profile/profileApi'
// import Modal from '../../../Atoms/Modal/Modal'
// import NotificationsOptionsForm from './NotificationsOptionsForm'


export default function NotificationsOptions() {
    const { data: details } = useGetProfileDetailsQuery()

    const [state, setState] = useState(false)
    const [notifyMethod] = useNotifyMethodMutation()
    const handleNofication = (value) => {
        setState(!state)
        notifyMethod({
            "notificationMethod": "Email",
            "notifymewhenafavouritejobisending": !state
        })
    }
    return (
        <div>
            <div className='p-8 border w-full flex flex-col space-y-4'>
                <h4 className='text-[#051532] font-medium text-2xl'>Notification options</h4>
                <div className="">
                    <h6 className='text-[#646464] font-bold'>Notification method</h6>
                    <p className='text-[#646464] font-normal'>Email</p>
                </div>
                <div className="">
                    <h6 className='text-[#646464] font-bold pb-1'>Notify me when a favourite job is ending</h6>
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" onChange={handleNofication} className="sr-only peer" checked={details?.data?.notifyme ? true : false} />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                        <span className="ml-3 text-sm font-bold text-gray-900 dark:text-gray-300 capitalize">{state ? "yes" : "no"}</span>
                    </label>
                </div>


                {/* 
                <Modal open={open} setOpen={setOpen}>
                    <NotificationsOptionsForm setOpen={setOpen} />
                </Modal>

                <div className="">
                    <button onClick={() => setOpen(true)} className='btn-outline py-[10px]'>Edit</button>
                </div> */}

            </div>
        </div>
    )
}
