import React from "react";
import DateVeiw from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'


export default function DateTimePicker(props) {
    const { label, name, ...rest } = props
    return (
        <div className="">
            <div className="">
                <label htmlFor={name} className="block mb-2 text-base font-bold text-gray-900">{label}</label>
                <Field
                    name={name}

                >
                    {
                        ({ form, field }) => {
                            const { setFieldValue } = form
                            const { value } = field
                            return (
                                <DateVeiw
                                    peekNextMonth
                                    showMonthDropdown
                                    showYearDropdown
                                    showTimeSelect
                                    dropdownMode="select"
                                    className="border border-gray-300 rounded-md text-gray-900 text-base font-normal focus:ring-sky-500 focus:border-blue-500 block w-full p-2.5"
                                    id={name}
                                    {...field}
                                    {...rest}
                                    selected={value}
                                    onChange={(val) => setFieldValue(name, val)}
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                />
                            )
                        }
                    }

                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}
