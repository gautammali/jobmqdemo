import { Form, Formik } from "formik"
import Loading from "../../Atoms/Alert/Loading"
import FormikControl from "../../Atoms/Forms/FormikControl"
import * as yup from 'yup'
import { usePostCriteriaMutation, useUpdateCriteriaMutation } from "../../../../features/selectionCriteria/selectionApi"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const affirmativeQuestionOptions = [
    { key: "Yes", value: "1" },
    { key: "No", value: "0" }
]

const mandatoryOptions = [
    { key: "Yes", value: "3" },
    { key: "No", value: "4" }
]

const JobSelectionFrom = ({ setOpen, prevData }) => {
    const {id} = useSelector(state=>state.job.data)
    const [postCriteria, { data, isLoading }] = usePostCriteriaMutation()
    const [updateCriteria, { data: updateData, isLoading: updateLoading }] = useUpdateCriteriaMutation()

    const affirmativeQuestion = prevData?.affirmativeQuestion === 1 ? "1" : "0"
    const mandatory = prevData?.mandatory === true ? "3" : "4"
    const initialValues = {
        question: prevData?.question || "",
        affirmativeQuestion: prevData?.selectionCriteriaId ? affirmativeQuestion : "",
        mandatory: prevData?.selectionCriteriaId ? mandatory : "",

    }

    const validationSchema = yup.object({

        question: yup.string().max(200, "Too Long!").required(),
        affirmativeQuestion: yup.string(),
        mandatory: yup.number(),

    })
    const onSubmit = values => {
        if (prevData?.selectionCriteriaId) {
            updateCriteria({
                ...prevData,
                ...values,
                affirmativeQuestion: values.affirmativeQuestion === "1" ? 1 : 0,
                mandatory: values.mandatory === "3" ? true : false,
            })
        } else {
            postCriteria({
                selectionCriteriaId: 0,
                jobID: id,
                lineNo: 1,
                ...values,
                affirmativeQuestion: values.affirmativeQuestion === "1" ? 1 : 0,
                mandatory: values.mandatory === "3" ? true : false,

            })
        }
    }

    useEffect(() => {
        if (data?.isSuccess || updateData?.isSuccess) {
            setOpen(false)
        }
    }, [data?.isSuccess, setOpen, updateData?.isSuccess])



    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >

            {
                formik => (
                    <Form>
                        {isLoading && updateLoading && <Loading />}
                        <h3 className='text-[#051532] text-2xl mb-2 font-medium'>Selection Criteria</h3>

                        <div className="flex  flex-col gap-4 py-5">
                            <FormikControl control="input" label="Question" name="question" />

                            <FormikControl control="radio" label="Affirmative Question" name="affirmativeQuestion" options={affirmativeQuestionOptions} />
                            <FormikControl control="radio" label="Mandatory" name="mandatory" options={mandatoryOptions} />

                        </div>


                        <div className="">
                            <button
                                type="submit"
                                className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                            >
                                Save
                            </button>
                            <button onClick={() => setOpen(false)}
                                className="mt-3 inline-flex w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
                            >
                                Cancel
                            </button>
                        </div>

                    </Form>
                )}
        </Formik>
    )
}

export default JobSelectionFrom