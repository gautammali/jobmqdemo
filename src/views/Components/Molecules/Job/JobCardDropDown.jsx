import { Menu, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { NavLink } from 'react-router-dom'




function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


export default function JobCardDropDown({ jobId }) {

    const handleDelete = () => {

    }
    return (
        <Menu as="div" className="relative">
            <div className='flex'>
                <Menu.Button className="rounded-full p-3 hover:bg-gray-200 transition_1">
                    <BsThreeDotsVertical />
                </Menu.Button>
            </div>
            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                        {({ active }) => (
                            <NavLink
                                to={"/businesses/jobs/update/" + jobId}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 ')}
                            >
                                Edit
                            </NavLink>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={handleDelete}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 ')}
                            >
                                Active
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                onClick={handleDelete}
                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 ')}
                            >
                                Deactive
                            </button>
                        )}
                    </Menu.Item>
                    

                </Menu.Items>
            </Transition>
        </Menu>
    )
}
