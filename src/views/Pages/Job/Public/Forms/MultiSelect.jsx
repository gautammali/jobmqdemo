/* eslint-disable eqeqeq */
import React from 'react'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux'
import { useGetKeywordValuesQuery } from '../../../../../features/keyword/keywordApi'
import FormikControl from '../../../../Components/Atoms/Forms/FormikControl'
import { updateJobSearchKeywords } from '../../../../../features/job/jobListSlice'

export default function MultiSelect({ setOpen, item, lineNo }) {
    const { keywordID } = item
    const { data, isSuccess } = useGetKeywordValuesQuery(keywordID)


    const { jobSearchKeyWords } = useSelector(state => state.jobList)
    const exists = jobSearchKeyWords?.find(i => i.keyworkId === keywordID)

    const d = exists?.keywordValueId?.map(element => {
        return data?.data?.find((obj) => {
            return obj.valueID == element;
        });
    })

    if (isSuccess && data?.data?.length > 0) {
        return <MultiForm
            options={ d || []}
            item={item}
            lineNo={lineNo}
            setOpen={setOpen}
            data={data?.data}
        />
    }



}



const MultiForm = ({ options, item, setOpen, data }) => {
    const dispatch = useDispatch()
    const { keywordID, name } = item
    
    const initialValues = {
        experinceLevel: [...options]
    }
    const validationSchema = Yup.object({
        experinceLevel: Yup.array().required(),
    })
    const onSubmit = values => {
        const value = values.experinceLevel?.map(i => i.value)
        const valueID = values.experinceLevel?.map(i => i.valueID)
      

        dispatch(updateJobSearchKeywords({
            keyworkId: keywordID,
            keywordValueId: valueID,
            keywordValue: value
        }))
        setOpen(false)
    }


    return (
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

                            <FormikControl control="multiselect" label={name} name="experinceLevel" options={data} />

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