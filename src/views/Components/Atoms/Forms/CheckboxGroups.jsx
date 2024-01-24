import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function CheckboxGroups(props) {
    const { label, name, options, ...rest } = props
    return (

        <div className="">
            <div className="">
                <label className="block mb-2 text-base font-bold text-gray-900">{label}</label>
                <Field name={name} {...rest}>
                    {
                        ({ field }) => {
                            return options.map(option => {
                                return (
                                    <React.Fragment key={option.key}>
                                        <input
                                            type="checkbox"
                                            id={option?.value}
                                            {...field}
                                            value={option?.key}
                                            checked={field?.value?.includes(option?.key)}
                                        />
                                        <label htmlFor={option?.value} className="pl-2 capitalize pr-4">{option?.value}</label>
                                    </React.Fragment>
                                )
                            })
                        }
                    }
                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}