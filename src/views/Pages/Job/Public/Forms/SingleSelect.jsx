/* eslint-disable eqeqeq */
import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useGetKeywordValuesQuery } from '../../../../../features/keyword/keywordApi'
import FormikControl from '../../../../Components/Atoms/Forms/FormikControl'
import { useDispatch, useSelector } from 'react-redux'
import { updateJobSearchKeywords } from '../../../../../features/job/jobListSlice'

export default function SingleSelect({ setOpen, item }) {
    const dispatch = useDispatch()
    const { keywordID, name } = item
    const { jobSearchKeyWords } = useSelector(state => state.jobList)
    const exists = jobSearchKeyWords?.find(i=>i.keyworkId === keywordID)
    
    const { data, isSuccess } = useGetKeywordValuesQuery(keywordID)
    
    const prevData = data?.data?.find(i => i.valueID == exists?.keywordValueId)
    const initialValues = {
        experinceLevel: prevData ? prevData : {}
    }
    const validationSchema = Yup.object({
        experinceLevel: Yup.object().required(),
    })
    const onSubmit = values => {

        dispatch(updateJobSearchKeywords({
            ...values.experinceLevel,
            keyworkId: keywordID,
            keywordValueId: values.experinceLevel.valueID
        }))
        setOpen(false)
    }
   

    return isSuccess && (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {
                formik => (
                    <Form>
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Edit {name}</h3>


                        <div className="sp space-y-4 py-5">

                            <FormikControl control="select" label={name} name="experinceLevel" options={data?.data} />

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
