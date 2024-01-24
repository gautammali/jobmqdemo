import { ErrorMessage, Field } from 'formik'
import React from 'react'
import Warning from '../Alert/Warning'

export default function TextField({
    name,
    label,
    type = "text",
    placeholder
}) {
    return (
        <div className="">
            <Field name={name}>
                {
                    ({ field }) => (
                        <>
                            <label htmlFor="email" className="block mb-2 text-xl text-site-text-200 font-roboto font-normal">{label}</label>
                            <input

                                type={type}
                                {...field}
                                className="w-full border-site-border-100 bg-white rounded h-16 border px-4 boxShadow2" placeholder={placeholder} required />
                        </>
                    )
                }

            </Field>
            <ErrorMessage name={name}>
                {msg => <Warning message={msg} />}
            </ErrorMessage>
        </div>
    )
}
