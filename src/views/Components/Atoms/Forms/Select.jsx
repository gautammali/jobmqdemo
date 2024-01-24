import React from "react";
import SelectOption from 'react-select';
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'

export default function Select(props) {
    const { label, name, options, ...rest } = props
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
                                <SelectOption
                                    options={options}
                                    getOptionLabel={option => option.value}
                                    defaultValue={value}
                                    id={name}
                                    {...field}
                                    {...rest}
                                    onChange={(list, selected) => setFieldValue(name, list)}

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
