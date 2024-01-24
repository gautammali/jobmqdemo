/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import FormikControl from '../../../../Atoms/Forms/FormikControl'
import { useGetCityValuesQuery, useUpdateKeywordMutation } from '../../../../../../features/keyword/keywordApi'

export default function City({ setOpen, item, lineNo, prevItem }) {
    const { userId } = useSelector(state => state.auth.user)
    const { keywordId, kwName } = item
    const { data, isSuccess } = useGetCityValuesQuery(prevItem?.kwValueId)
    const [updateKeyword, { data: updateData }] = useUpdateKeywordMutation()
    const prevData = data?.data?.find(i => i.valueID == item.kwValueId)
    const initialValues = {
        experinceLevel: prevData ? prevData : {}
    }
    const validationSchema = Yup.object({
        experinceLevel: Yup.object().required(),
    })
    const onSubmit = values => {

        updateKeyword({
            kwid: keywordId,
            lineNo: lineNo + 1,
            kwValueId: String(values?.experinceLevel?.valueID),
            userId,
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

                        <div className="mt-16">
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
