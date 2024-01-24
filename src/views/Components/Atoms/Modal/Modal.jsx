import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { GrClose } from 'react-icons/gr'


export default function Modal({ open, setOpen, children }) {

    const cancelButtonRef = useRef(null)

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform  rounded-lg bg-white text-left shadow-xl transition-all sm:mx-4 w-full sm:my-8 sm:w-full sm:max-w-[960px] h-max">
                                <div className="bg-white p-[32px] rounded-lg">


                                    <div className="w-full">
                                        <Dialog.Title as="div" className="flex justify-end">
                                            <div onClick={() => setOpen(false)} className=" flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full hover:bg-red-100 sm:mx-0 sm:h-10 sm:w-10 transition_1">
                                                <GrClose className=" text-blue-600  stroke-2" />
                                            </div>
                                        </Dialog.Title>
                                        {children}



                                        
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}
