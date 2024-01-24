import { Form, Formik } from 'formik';
import * as Yup from 'yup'
import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { clearFileState } from '../../../../features/file/fileSlice';
import useUploadFile from '../../Atoms/utils/useUploadFile';
import { useAddDocumentMutation, useUpdateDocumentMutation } from '../../../../features/document/documentApi';
import FormikControl from '../../Atoms/Forms/FormikControl';
import Leftword from '../../Atoms/utils/Leftword';
import TextError from '../../Atoms/Alert/TextError';


const attachmentType = [
  { key: "File", value: "1" },
  { key: "Note", value: "2" },
  { key: "Url", value: "3" }
]




export default function JobAttechmentForm({ setOpen, prevData, lineNo }) {

  const [fileError, setFileError] = useState("")
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(clearFileState())
  }, [dispatch])


  const { fileReferenceCode } = useSelector(state => state.file.data || {})
  // upload file 
  const { handleUploadFile } = useUploadFile()
  function handleChange(event) {
    const formData = new FormData();
    formData.append(`formFiles`, event.target.files[0]);
    handleUploadFile(formData)
  }


  const [UpdateDocument, { data: updateDocx }] = useUpdateDocumentMutation()
  const [addDocument, { data: addDocx }] = useAddDocumentMutation()
  const initialValues = {
    attachmentType: String(prevData?.attachmentType) || "1",
    title: prevData?.title || "",
    note: prevData?.note || "",
    filePath: prevData?.filePath || "",
    url: prevData?.url || "",
  }

  const validationSchema = Yup.object({
    attachmentType: Yup.string().required("Required!"),
    title: Yup.string().required("Required!"),
    filePath: Yup.string().when("attachmentType", {
      is: "1",
      then: Yup.string()
    }),
    note: Yup.string().max(700).when("attachmentType", {
      is: "2",
      then: Yup.string().max(700, "Too Long!").min(200, "Too Sort!").required("Required!")
    }),
    url: Yup.string().when("attachmentType", {
      is: "3",
      then: Yup.string().url("Must Be A Valid URL").required("Required!")
    }),
  })

  const { id } = useSelector(state => state.job.data)

  const onSubmit = values => {
    if (values.attachmentType === "1" && !fileReferenceCode) {
      setFileError("File is required!")
      return
    }

    if (prevData?.attachmentType) {
      UpdateDocument({
        type: 2,
        referenceId: id,
        ...prevData,
        ...values,
        attachmentType: Number(values.attachmentType),
        filePath: fileReferenceCode || prevData?.filePath
      })
    } else {
      addDocument({
        type: 2,
        referenceId: id,
        ...values,
        lineNo: lineNo + 1 || 1,
        attachmentType: Number(values.attachmentType),
        filePath: fileReferenceCode || ""
      })
    }
  }

  useEffect(() => {
    if (addDocx?.isSuccess || updateDocx?.isSuccess) {
      setOpen(false)
    }
  }, [addDocx?.isSuccess, setOpen, updateDocx?.isSuccess])





  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >

      {
        formik => (
          <Form>

            <h4 className='text-[#051532] text-2xl mb-2 font-medium'>Additional Documents</h4>
            <label className="block text-sm font-medium text-gray-700 pb-4">You can save up to 10 additional documents and decide which one to use when applying for a job.</label>


            <div className="sp space-y-4 py-5">


              <FormikControl control="radio" label="Document Type" name="attachmentType" options={attachmentType} />
              <FormikControl control="input" type="text" label="Document name" name="title" />
              {
                (formik.values.attachmentType === "1" && <input type={"file"} name="filePath" onChange={handleChange} />) ||
                (formik.values.attachmentType === "2" && <FormikControl control="textarea" type="text" label="Note" name="note" left={<Leftword max={700} current={formik.values.note} />} />) ||
                (formik.values.attachmentType === "3" && <FormikControl control="input" type="text" label="Url" name="url" />)
              }
              {fileError.length > 0 && <TextError>{fileError}</TextError>}



            </div>

            <div className="">
              <button
                type="submit"
                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
              >
                Save
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
                onClick={() => setOpen(false)}
              >
                Cancel
              </button>
            </div>
          </Form>
        )
      }
    </Formik>
  )
}
