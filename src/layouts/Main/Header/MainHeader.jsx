import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import logo from '../../../assets/Orignal.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { userLoggedOut } from '../../../features/auth/authSlice'
import UploadProfilePic from './UploadProfilePic'


export function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function MainHeader() {

    const { accessToken, user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogout = () => {
        if (user?.userType === 1) {
            setTimeout(() => {
                navigate("/individuals/login")
            }, 100);
        }
        if (user?.userType === 2) {
            setTimeout(() => {
                navigate("/businesses/login")
            }, 100);
        }
        dispatch(userLoggedOut())

    }
    return (
        <div className='bg-site-bg-300'>
            <div className="container flex justify-between items-center p-3 ">
                <NavLink to='/' className="">
                    <img className='max-w-[200px]' src={logo} alt="" />
                </NavLink>
                {/* Accounts dropdown */}
                {accessToken ?
                    <Menu as="div" className="relative ml-3">
                        <div className='flex'>
                            <UploadProfilePic />
                            <Menu.Button className="flex flex-col items-start hover:bg-[#082354]rounded-md text-white text-sm font-semibold px-4 py-2">
                                <div className="flex items-center gap-1">
                                    <span className='text-lg font-bold'>{user?.userName}</span>
                                    <MdOutlineKeyboardArrowDown className='text-2xl' />
                                </div>
                                <p>{user?.email}</p>
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to={(user?.userType === 1 ? "individuals" : "businesses") + "/profile"}
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 ')}
                                        >
                                            Profile
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to={(user?.userType === 1 ? "individuals" : "businesses") + "/profile/account/details"}
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 border-b')}
                                        >
                                            Account
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleLogout()}
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700')}
                                        >
                                            Logout
                                        </button>
                                    )}
                                </Menu.Item>

                            </Menu.Items>
                        </Transition>
                    </Menu>
                    :
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex items-center gap-1 rounded-full text-blue-600 bg-white text-sm font-semibold hover:underline px-4 py-2">
                                <span className=''>Sign in or register</span>
                                <MdOutlineKeyboardArrowDown className='text-lg' />
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
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/individuals/login"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 border-b')}
                                        >
                                            Individuals <br />
                                            <span className='text-[12px] font-normal'>Job seekers, students, etc</span>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <NavLink
                                            to="/businesses/login"
                                            className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm font-semibold text-gray-700 ')}
                                        >
                                            Business users <br />
                                            <span className='text-[12px] font-normal'>Employers, recruiters, etc.</span>
                                        </NavLink>
                                    )}
                                </Menu.Item>
                                

                            </Menu.Items>
                        </Transition>
                    </Menu>
                }
            </div>


            <div className="container flex md:flex-nowrap flex-wrap justify-start gap-4 mt-6">
                {[
                    // { name: 'Home', id: 1, url: "/" },
                    { name: 'Jobs', id: 2, url: "/jobs"},
                ].map(({ name, url, id }) => <NavLink className={({ isActive }) => classNames(isActive ? 'border-white' : 'border-[#00232d]', 'border-b-4 hover:border-[#fff] pb-2')} key={id} to={url}> <span className='text-white px-4 '>{name}</span> </NavLink>)}
            </div>
        </div >
    )
}
