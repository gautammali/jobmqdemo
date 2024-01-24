import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function InputLink(props) {
    const { label, name,pre, ...rest } = props
    return (

        <div className="">
            <div className="">
                <label htmlFor={name} className="block mb-2 text-base font-bold text-gray-900">{label}</label>
                <div className="flex border-2 rounded-md focus-within:border-2 focus-within:border-sky-500 items-center bg-[#f4f4f4] divide-x-2">
                    <p className='px-4 font-semibold text-[#4f4f4f]'>{pre}</p>
                    <Field
                        id={name}
                        name={name}
                        {...rest}
                        className=" focus:outline-0 text-gray-900 text-base font-normal  block w-full p-2.5"
                    />
                </div>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}