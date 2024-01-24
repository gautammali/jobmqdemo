import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { BsThreeDotsVertical, BsClipboard } from "react-icons/bs";
import { MdDone } from "react-icons/md";
import useClipboard from "react-use-clipboard";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdowns({url}) {

    const [isCopied, setCopied] = useClipboard(url);
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="">
            
                    <BsThreeDotsVertical className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                   
                        <Menu.Item>
                            {({ active }) => isCopied ? (<p
                                className={classNames(
                                    active ? 'bg-green-100 text-green-900' : 'text-green-700',
                                    'px-4 py-2 text-sm flex items-center cursor-pointer bg-green-100'
                                )}
                            >
                                <MdDone className="inline-block mr-2" />
                                Copied
                            </p>): (
                                <p
                                    onClick={setCopied}
                                     className={classNames(
                                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                        'px-4 py-2 text-sm flex items-center cursor-pointer'
                                    )}
                                >
                                    <BsClipboard  className="inline-block mr-2" />
                                    Copy the link
                                </p>
                            )}
                        </Menu.Item>
                    
                    
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
