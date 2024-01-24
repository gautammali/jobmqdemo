import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function Checkbox(props) {
    const { label, name, options, ...rest } = props
    return (

        <div className="">
            <div className="">
                <label className='flex gap-2 items-center'>
                    <Field type="checkbox" name={name} {...rest} />
                    {label}
                </label>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}