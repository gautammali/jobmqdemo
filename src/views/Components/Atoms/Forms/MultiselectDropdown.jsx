import React from "react";
import Multiselect from 'multiselect-react-dropdown';
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'


export default function MultiselectDropdown(props) {
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
                                <Multiselect
                                    options={options}
                                    displayValue="value"
                                    onSelect={(list, selected) => setFieldValue(name, list)}
                                    onRemove={(list, selected) => setFieldValue(name, list)}
                                    selectedValues={value}
                                    id={name}
                                    {...field}
                                    {...rest}

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
