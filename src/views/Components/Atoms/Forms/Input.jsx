import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function Input(props) {
    const { label, name, ...rest } = props
    return (

        <div className="">
            <div className="">
                <label htmlFor={name} className="block mb-2 text-base font-bold text-gray-900">{label}</label>
                <Field
                    id={name}
                    name={name}
                    {...rest}
                    className=" border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5"
                />
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}


