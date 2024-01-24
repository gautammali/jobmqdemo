import moment from "moment";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
// import { BsShareFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useGetJobDetailsQuery } from "../../../../features/job/jobListingApi";
import { updateCompanyId } from "../../../../features/job/jobListSlice";
import RelatedJobs from "./RelatedJobs";
// import JobAttechment from '../../../Components/Molecules/Job/JobAttechment'
import { Helmet } from 'react-helmet-async';

export default function PublicJobDetails() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isSuccess } = useGetJobDetailsQuery(id);
  const {
    id: jobId,
    doc,
    description,
    minSalary,
    maxSalary,
    expirationDate,
    desingnation,
    selectionCriteriaDetails,
    keywordCriteria,
    companyName,
    companyLogo,
    address,
    contactId,
    totalApplications,
    isJobApplied,
    seoDetail,
    jobPostingSchema,
    breadCurmbList,
  } = data || {};

  const handlePostedByJob = () => {
    dispatch(updateCompanyId(contactId));
    setTimeout(() => {
      navigate("/jobs");
    }, 200);
  };


  console.log(data);


  const itemListElement = breadCurmbList?.itemListElement?.map((item) => {
    return {
      "@type": item.type,
      position: item.position,
      item: { "@id": item?.item, name: item?.name, },
    }
  });
  return (
    isSuccess && (
      <>
        <Helmet>
          <title> {desingnation} - {companyName} | JOBMQ.COM(Job Message Queue)</title>
          <meta name="title" content={`${desingnation.slice(0, 50)} - ${companyName} | JOBMQ.COM(Job Message Queue)`} />
          <meta name="description" content={description.slice(0, 50)} />
          <title>Sales Executive- Females, Russian / Eastern European | Dubai - JOBMQ.COM(Job Message Queue)</title>

          <link rel="canonical" href={`http://jobmq.com/jobs/${jobId}/${seoDetail?.slugUrl}`} />

          <meta property="og:type" content="article" />
          <meta property="og:title" content={`${desingnation} - ${companyName} | JOBMQ.COM(Job Message Queue)`} />
          <meta property="og:description" content={description.slice(0, 50)} />
          <meta property="og:locale" content={seoDetail?.currency} />
          <meta property="og:url" content={`http://jobmq.com/jobs/${jobId}/${seoDetail?.slugUrl}`} />
          <meta property="og:site_name" content="Job Message Queue" />
          <meta property="article:publisher" content="https://www.facebook.com/J0BMQ" />
          <meta property="article:modified_time" content={seoDetail?.jobPostingDate} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@JOBMQ1" />
          <meta name="twitter:label1" content="Est. reading time" />
          <meta name="twitter:data1" content="2 minutes" />
          <script type="application/ld+json" >{JSON.stringify({
            '@context': breadCurmbList?.context, "@type": "BreadcrumbList", itemListElement
          })}</script>
          <script type="application/ld+json">{JSON.stringify({
            "@context": jobPostingSchema?.context,
            "@type": jobPostingSchema?.type,
            applicantLocationRequirements: { '@type': jobPostingSchema?.applicantLocationRequirements?.type, name: jobPostingSchema?.applicantLocationRequirements?.name },
            baseSalary: {
              '@type': jobPostingSchema?.baseSalary?.type,
              currency: jobPostingSchema?.baseSalary?.currency,
              value: {
                '@type': jobPostingSchema?.baseSalary?.value?.type,
                minValue: jobPostingSchema?.baseSalary?.value?.minValue,
                maxValue: jobPostingSchema?.baseSalary?.value?.maxValue,
                unitText: jobPostingSchema?.baseSalary?.value?.unitText
              }
            },
            datePosted: jobPostingSchema?.datePosted,
            description: jobPostingSchema?.description,
            educationRequirements: {
              '@type': jobPostingSchema?.educationRequirements?.type,
              credentialCategory: jobPostingSchema?.educationRequirements?.credentialCategory,
            },
            email: jobPostingSchema?.email,
            employmentType: jobPostingSchema?.employmentType,
            experienceRequirements: {
              '@type': jobPostingSchema?.experienceRequirements?.type,
              monthsOfExperience: jobPostingSchema?.experienceRequirements?.monthsOfExperience,
            },
            hiringOrganization: {
              '@type': jobPostingSchema?.hiringOrganization?.type,
              name: jobPostingSchema?.hiringOrganization?.name,
              sameAs: jobPostingSchema?.hiringOrganization?.sameAs,
              logo: jobPostingSchema?.hiringOrganization?.logo,
              url: jobPostingSchema?.hiringOrganization?.url,
            },
            incentiveCompensation: jobPostingSchema?.incentiveCompensation,
            industry: jobPostingSchema?.industry,
            jobBenefits: jobPostingSchema?.jobBenefits,
            jobLocation: {
              '@type': jobPostingSchema?.jobLocation?.type,
              address: {
                '@type': jobPostingSchema?.jobLocation?.address?.type,
                addressCountry: jobPostingSchema?.jobLocation?.address?.addressCountry,
                addressLocality: jobPostingSchema?.jobLocation?.address?.addressLocality,
                addressRegion: jobPostingSchema?.jobLocation?.address?.addressRegion,
              }
            },
            jobLocationType: jobPostingSchema?.jobLocationType,
            occupationalCategory: jobPostingSchema?.occupationalCategory,
            qualifications: jobPostingSchema?.qualifications,
            responsibilities: jobPostingSchema?.responsibilities,
            salaryCurrency: jobPostingSchema?.salaryCurrency,
            skills: jobPostingSchema?.skills,
            specialCommitments: jobPostingSchema?.specialCommitments,
            title: jobPostingSchema?.title,
            validThrough: jobPostingSchema?.validThrough,
            workHours: jobPostingSchema?.workHours,
          })}
          </script>
        </Helmet>
        <div className="bg-[#f4f4f4] pt-8 pb-4">
          <div className="pt-8 pb-4">
            <div className="container flex justify-between flex-wrap sm:flex-nowrap">
              <div className="">
                <div className="flex items-center gap-1 text-sky-600 font-medium cursor-pointer">
                  <NavLink to="/" className="hover:underline">
                    Home
                  </NavLink>
                  <AiOutlineRight />
                  <NavLink to="/jobs" className="hover:underline">
                    Jobs
                  </NavLink>
                </div>
                <h1 className="text-2xl md:text-[52px] text-[#051532] pt-5 pb-4">
                  {desingnation}
                </h1>
                <p className="text-black font-extrabold">
                  Job Id:{" "}
                  <span className="font-semibold text-black">{jobId}</span>
                </p>
                <p className="text-black font-extrabold">
                  Posted on:{" "}
                  <span className="font-semibold text-black">
                    {moment(new Date(doc)).format("DD MMM YYYY")}
                  </span>
                </p>
                <p className="text-black font-extrabold">
                  Salary:{" "}
                  <span className="font-semibold text-black">
                    {minSalary + " - " + maxSalary} {" AED"}
                  </span>
                </p>
                <p className="text-black font-extrabold">
                  Expiring on:{" "}
                  <span className="font-semibold text-black">
                    {moment(new Date(expirationDate)).format("DD MMM YYYY")}
                  </span>
                </p>
                <div className="flex items-center gap-6 pt-4">
                  <div className="flex items-center gap-3">
                    {isJobApplied ? (<button
                      type="button"
                      className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1 cursor-not-allowed"
                    >
                      Applied
                    </button>) : <NavLink
                      to={`/jobs/apply/${jobId}`}
                      className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1"
                    >
                      Apply
                    </NavLink>}
                    {/* <button
                      type="button"
                      className="mt-3 inline-flex items-center gap-2 w-full justify-center rounded-full border border-sky-600 hover:underline bg-white px-6 py-2 text-base font-semibold text-sky-700 shadow-sm hover:bg-gray-100  sm:mt-0  sm:w-auto sm:text-lg transition_1"
                    >
                      {" "}
                      <AiOutlineStar />
                      Save Job
                    </button> */}
                  </div>
                  {/* <div className="flex justify-center items-center text-sky-600 gap-2 hover:underline font-semibold cursor-pointer">
                    <BsShareFill />
                    <p>Share this job</p>
                  </div> */}
                </div>
              </div>

              <div className="flex flex-col ">
                <div className="flex gap-4 justify-between flex-1">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-bold capitalize">
                      {companyName}
                    </h2>
                    <h3 className="font-medium">{address}</h3>
                    <h3
                      className="font-medium capitalize cursor-pointer"
                      onClick={handlePostedByJob}
                    >
                      {"posted job by"}
                    </h3>
                  </div>
                  <div className="">
                    <img
                      src={`https://api.jobmq.com/file/${companyLogo}`}
                      className={"max-h-14 "}
                      alt=""
                    />
                  </div>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="inline-flex w-full justify-center rounded-full border border-transparent px-6 py-2 text-base font-semibold text-white shadow-sm bg-[#0076bd] hover:bg-primary-800 sm:w-auto sm:text-lg transition_1 capitalize"
                  >
                    job applicants ({totalApplications})
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="grid sm:grid-cols-12 grid-cols-1 gap-5 my-5">
            <div className="col-span-8 flex flex-col gap-5">
              <div className="p-5 border">
                <h3 className="text-2xl text-[#051532] pb-5">
                  Job description
                </h3>
                <p className="pb-7">About this role</p>

                <p>{description}</p>
              </div>

              <div className="border p-5">
                <h3 className="text-2xl text-[#051532] pb-5">
                  Application Questions
                </h3>
                <div className="flex flex-col gap-3">
                  {selectionCriteriaDetails?.map((item, id) => (
                    <div key={id} className="p-5 border w-full">
                      <p>{item?.question}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* <JobAttechment /> */}
            </div>
            <div className="col-span-4">
              <div className="bg-[#f4f4f4] p-5 h-auto">
                <h3 className="text-2xl text-[#051532] pb-5">Job Info</h3>
                <div className="flex flex-col gap-3">
                  {keywordCriteria?.map((item, id) => (
                    <p key={id} className="font-bold text-base">
                      {item?.kwName}:{" "}
                      <span className="font-normal">{item?.kwValueName}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2 className="text-2xl text-[#051532]  pb-1">
            Posted by <span className="capitalize font-medium">{companyName}</span>{" "}
          </h2>
          <RelatedJobs contactId={contactId} jobId={jobId} />
        </div>
      </>
    )
  );
}
