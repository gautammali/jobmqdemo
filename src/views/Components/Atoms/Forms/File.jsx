import React, { useEffect, useState } from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from '../Alert/TextError'
import { useGetFilePathQuery, useUploadFileMutation } from '../../../../features/file/fileApi'

export default function File(props) {
    const { label, name, ...rest } = props

    return (

        <div className="">
            <div className="">
                <label htmlFor={name} className="block mb-2 text-base font-bold text-gray-900">{label}</label>
                <Field
                    name={name}

                >
                    {
                        ({ form, field }) => <InputFile form={form} field={field} name={name} rest={rest} />
                    }

                </Field>
            </div>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}


const InputFile = ({ form, field, name, rest }) => {
    const { setFieldValue } = form
    const { value } = field

    const [fileId, setFileId] = useState("")
    const [checkFile, setCheckFile] = useState(false)
    const { data } = useGetFilePathQuery(fileId, { skip: !checkFile })
    const [uploadFile, { data: upload }] = useUploadFileMutation()


    function handleChange(event) {
        const formData = new FormData();
        formData.append(`formFiles`, event.target.files[0]);
        uploadFile(formData)
        if (upload?.isSuccess) {
            setFileId(upload?.data)
            setCheckFile(true)
        }
        if (data?.isSuccess) {
            setFieldValue(name, data?.data?.fileReferenceCode)
        }

    }


    // useEffect(() => {
    //     if (upload?.isSuccess) {
    //         setFileId(upload?.data)
    //         setCheckFile(true)
    //     }
    // }, [upload])


    useEffect(() => {
        if (data?.isSuccess) {
            setFieldValue(name, data?.data?.fileReferenceCode)
        }
    }, [data, name, setFieldValue])




    return (
        <input type={"file"}
            defaultValue={value}

            id={name}
            {...field}
            {...rest}
            onChange={handleChange}

        />
    )
}