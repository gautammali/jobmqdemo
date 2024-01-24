import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function Textarea(props) {
    const { label, name, pre, left, ...rest } = props
    return (
        <div className="">
            <div className="">
                <label htmlFor={name} className="block text-base font-bold text-gray-900">{label}</label>
                <Field
                    as='textarea'
                    id={name}
                    name={name}
                    {...rest}
                    rows={6}
                    className=" border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <div className="flex justify-between items-center px-2">
                <div className=""><ErrorMessage name={name} component={TextError} /> </div>
                <div className="">{left}</div>
            </div>
        </div>
    )
}
