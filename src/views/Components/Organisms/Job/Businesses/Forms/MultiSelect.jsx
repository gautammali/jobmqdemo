/* eslint-disable eqeqeq */
import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useSelector } from 'react-redux'
import FormikControl from '../../../../Atoms/Forms/FormikControl'
import { useGetKeywordValuesQuery, useUpdateJobKeywordMutation } from '../../../../../../features/keyword/keywordApi'

export default function MultiSelect({ setOpen, item, lineNo }) {
    const { kwid } = item
    const { data, isSuccess } = useGetKeywordValuesQuery(kwid)

    const valuesid = item?.kwValueId?.split(",")
    const d = valuesid?.map(element => {
        return data?.data?.find((obj) => {
            return obj.valueID == element;
        });
    })
   
    if (isSuccess && data?.data?.length > 0) {
        return <MultiForm
            options={d || []}
            item={item}
            lineNo={lineNo}
            setOpen={setOpen}
            data={data?.data}
        />
    }



}



const MultiForm = ({ options, item, setOpen, lineNo, data }) => {
    const { kwid, kwName } = item
    const { userId } = useSelector(state => state.auth.user)
    const { id } = useSelector(state => state.job.data)
    const [updateJobKeyword, { data: updateData }] = useUpdateJobKeywordMutation()
    const initialValues = {
        experinceLevel: [...options]
    }
    const validationSchema = Yup.object({
        experinceLevel: Yup.array().required(),
    })
    const onSubmit = values => {
        const value = values.experinceLevel?.map(i => i.valueID)

        updateJobKeyword({
            kwid: kwid,
            lineNo: lineNo + 1,
            kwValueId: String(value.toString()),
            userId,
            JobId: id,
        })
    }

    useEffect(() => {
        if (updateData?.isSuccess) {
            setOpen(false)
        }
    }, [setOpen, updateData?.isSuccess])

    return (
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

                            <FormikControl control="multiselect" label={kwName} name="experinceLevel" options={data} />

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