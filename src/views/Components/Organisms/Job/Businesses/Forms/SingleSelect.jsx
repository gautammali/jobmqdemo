/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'

import FormikControl from '../../../../Atoms/Forms/FormikControl'
import { useGetKeywordValuesQuery, useUpdateJobKeywordMutation } from '../../../../../../features/keyword/keywordApi'

export default function SingleSelect({ setOpen, item, lineNo }) {
    const { userId } = useSelector(state => state.auth.user)
    const { id } = useSelector(state => state.job.data)
    const { kwid, kwName } = item
    const { data, isSuccess } = useGetKeywordValuesQuery(kwid)
    const [updateJobKeyword, { data: updateData }] = useUpdateJobKeywordMutation()
    const prevData = data?.data?.find(i => i.valueID == item.kwValueId)
    const initialValues = {
        experinceLevel: prevData ? prevData : {}
    }
    const validationSchema = Yup.object({
        experinceLevel: Yup.object().required(),
    })
    const onSubmit = values => {
        updateJobKeyword({
            kwid: kwid,
            lineNo: lineNo + 1,
            kwValueId: String(values?.experinceLevel?.valueID),
            userId,
            jobId:  id,
        })
    }
    useEffect(() => {
        if (updateData?.isSuccess) {
            setOpen(false)
        }
    }, [setOpen, updateData?.isSuccess])

    return isSuccess && (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {
                formik => (
                    <Form>
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit {kwName}</h3>


                        <div className="sp space-y-4 py-5">

                            <FormikControl control="select" label={kwName} name="experinceLevel" options={data?.data} />

                        </div>

                        <div className="mt-10">
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
