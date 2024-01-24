

import React from 'react';
import { ErrorMessage, Form, Formik } from 'formik';
import * as yup from 'yup';
import moment from 'moment';
import { useCreateJobMutation, useGetCurrencyQuery, useUpdateJobMutation } from '../../../../features/job/jobApi';
import Loading from '../../Atoms/Alert/Loading';
import FormikControl from '../../Atoms/Forms/FormikControl';
import { NavLink } from 'react-router-dom';
import TextError from '../../Atoms/Alert/TextError';

const forceSelectionCriteriaOptions = [
  { key: "Yes", value: "1" },
  { key: "No", value: "2" }
]



const autoRejectionRuleOptions = [
  { key: "Yes", value: "3" },
  { key: "No", value: "4" }
]

const JobPost = ({ prevData }) => {
  const [createJob, { isLoading }] = useCreateJobMutation()
  const [updateJob, { isLoading: updateLoading }] = useUpdateJobMutation()

  const { data: currency } = useGetCurrencyQuery()
  const options = currency?.data?.map(i => { return { name: i.name, value: i.code } })
  if (!options?.length) {
    return
  }


  const prevCurrency = prevData?.currency && options?.find(i => i.value === prevData?.currency)
  const forceSelectionCriteria = prevData?.forceSelectionCriteria ? "1" : "2"
  const autoRejectionRule = prevData?.autoRejectionRule ? "3" : "4"
 
  const initialValues = {
    desingnation: prevData?.desingnation || "",
    description: prevData?.description || "",
    minSalary: prevData?.minSalary || "",
    maxSalary: prevData?.maxSalary || "",
    expirationDate: prevData?.expirationDate ? new Date(prevData?.expirationDate) : "",
    atsRedirectionLink: prevData?.atsRedirectionLink || "",
    forceSelectionCriteria: prevData?.id ? forceSelectionCriteria : "",
    autoRejectionRule: prevData?.id ? autoRejectionRule : "",
    currency: prevCurrency?.name ? prevCurrency : { name: '', value: 'AED' },
    autoRejectionPercentage: prevData?.autoRejectionPercentage || "",

  }

  const validationSchema = yup.object({

    desingnation: yup.string().max(100, "Too Long!").required(),
    description: yup.string().required(),
    currency: yup.object().required(),
    minSalary: yup.string().matches("^[0-9]*$",{message:"Please enter vaild number"}).required("Min Salary is Required!"),
    maxSalary: yup.string().matches("^[0-9]*$", { message:"Please enter vaild number"}).required("Max Salary is Required!"),
    expirationDate: yup.date().min(new Date()).nullable().required(),
    atsRedirectionLink: yup.string(),
    forceSelectionCriteria: yup.string(),
    autoRejectionRule: yup.string(),
    autoRejectionPercentage: yup.number().when("autoRejectionRule", {
      is: '3',
      then: yup.number().min(0).max(100).typeError("Please enter positive decimal number").required("Is required!")

    }),

  })
  const onSubmit = values => {
    if (prevData?.id) {
      updateJob({
        ...prevData,
        ...values,
        jobId: prevData?.id,
        currency: values.currency.value,
        minSalary: Number(values.minSalary),
        maxSalary: Number(values.maxSalary),
        forceSelectionCriteria: values.forceSelectionCriteria === "1" ? true : false,
        autoRejectionRule: values.autoRejectionRule === "3" ? true : false,
        autoRejectionPercentage: Number(values.autoRejectionPercentage),
        expirationDate: moment(values.expirationDate).format("YYYY-MM-DD"),
      })

    } else {

      createJob({
        ...values,
        currency: values.currency.value,
        minSalary: Number(values.minSalary),
        maxSalary: Number(values.maxSalary),
        forceSelectionCriteria: values.forceSelectionCriteria === "1" ? true : false,
        autoRejectionRule: values.autoRejectionRule === "3" ? true : false,
        autoRejectionPercentage: Number(values.autoRejectionPercentage),
        doc: moment(new Date()).format("YYYY-MM-DD"),
        expirationDate: moment(values.expirationDate).format("YYYY-MM-DD"),
      });
    }
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
            <div className="border p-5">
              {isLoading && updateLoading && <Loading />}
              <h3 className='text-[#051532] text-2xl mb-2 font-medium text-center'>Job details</h3>



              <div className="flex  flex-col gap-4 py-5">
                <FormikControl control="input" label="Desingnation" name="desingnation" />

                <FormikControl control="textarea" label="Description" name="description" />
                <FormikControl control="select" label="Currency" name="currency" options={options} />
                <ErrorMessage name={"currency"} component={TextError} />
                <FormikControl control="input" label="Min salary" name="minSalary" />
                
                <FormikControl control="input" label="Max salary" name="maxSalary" />

                <FormikControl control="input" label="ATS Redirection Link" name="atsRedirectionLink" />

                <FormikControl control="radio" label="Force Selection Criteria" name="forceSelectionCriteria" options={forceSelectionCriteriaOptions} />
                <FormikControl control="radio" label="Auto Rejection Rule" name="autoRejectionRule" options={autoRejectionRuleOptions} />
                {formik.values.autoRejectionRule === '3' &&
                  <FormikControl control="input" label="Percentage" name="autoRejectionPercentage" />
                }
                <FormikControl control="date" label="Expiration Date" name="expirationDate" />

              </div>


              <div className="">
                <button
                  type="submit"
                  className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                >
                  Save
                </button>
                <NavLink to="/businesses/job"
                  className="mt-3 inline-flex w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0 sm:ml-3 sm:w-auto sm:text-lg transition_1"
                >
                  Cancel
                </NavLink>
              </div>
            </div>
          </Form>
        )}
    </Formik>
  );
};

export default JobPost;
