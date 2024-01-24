import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react'
import { BiChevronDown } from 'react-icons/bi'
import { useSelector } from 'react-redux';
import { FaPen } from 'react-icons/fa';
import { AiOutlineShareAlt, AiFillEye } from 'react-icons/ai';
import { MdWorkOutline } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import moment from 'moment';
import Steps from './Steps';
import { useGetProfileStatusQuery } from '../../../../../features/profile/profileApi';



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}



const Hero = () => {
    const { userName, lastLogin } = useSelector(state => state.auth.user)
    const { data } = useGetProfileStatusQuery()

    return (
        <div className='bg-[#E1f4f4] py-8 '>
            <div className="container flex justify-between items-center">
                <div className="">
                    <h1 className='text-[52px] font-normal text-[#051532]'>Hi {userName}</h1>
                    <p className='text-xl font-semibold pb-2 text-gray-600'>You last login {moment(lastLogin).format('ddd, DD MMM YYYY, hh:mm a')}</p>
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="rounded-full bg-white px-6 py-3 text-[#0076bd] border border-[#0076bd] font-semibold flex gap-1 items-center hover:underline">
                                <span className=''>More</span>
                                <BiChevronDown className="text-xl fontb-bold" />


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
                            <Menu.Items className="absolute left-0 z-10 mt-2 w-max origin-top-right rounded-md bg-white p-2 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none ">
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/individuals/profile"
                                            className={classNames(active ? 'bg-gray-100' : '', ' px-4 py-3 text-sm font-semibold text-gray-700 flex items-center gap-2 rounded')}
                                        >
                                            <AiFillEye className='text-lg' /> <span>Preview profile as seen by candidate</span>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/individuals/account"
                                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-3 text-sm font-semibold text-gray-700 flex items-center gap-3 rounded')}
                                        >
                                            <FaPen className='' /> <span>Preview profile as seen by candidate</span>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/individuals/account"
                                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-3 text-sm font-semibold text-gray-700 flex items-center gap-2 rounded')}>
                                            <AiOutlineShareAlt className='text-lg' /> Share your profile publicly
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/jobs/manage-applicants"
                                            className={classNames(active ? 'bg-gray-100' : '', 'px-4 py-3 text-sm font-semibold text-gray-700 flex items-center gap-2 rounded')}>
                                            <MdWorkOutline className='text-lg' /> Manage job appliciants
                                        </NavLink>
                                    )}
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
                {data?.data?.profileStatus === 6 && <div className="flex justify-end items-center">
                    <NavLink to={"/businesses/jobs/create"} className='btn-sky'>Post a Job</NavLink>
                </div>}
            </div>
            <Steps />
        </div>
    );
};

export default Hero;