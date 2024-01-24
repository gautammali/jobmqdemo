import React, { useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import ReactPlayer from 'react-player/youtube'
import { useGetProfileDetailsQuery } from '../../../../../features/profile/profileApi'
import Modal from '../../../Atoms/Modal/Modal'
import AboutBusinessForm from './Forms/AboutBusinessForm'

export default function AboutBusiness() {
  const [open, setOpen] = useState(false)
  const { data } = useGetProfileDetailsQuery()
  const { linkedInProfile, youTubeProfileUrl, aboutUs, organizationName } = data?.data || {}
  return (
      <div className='border bg-white border-site-border-400 boxShadow2 p-5'>
          <h2 className='text-2xl text-[#051532] mb-3'>About company</h2>
          <div className="flex flex-wrap md:flex-nowrap gap-4 pb-4">
              {youTubeProfileUrl && <div className=" basis-full md:basis-1/3">
                  <ReactPlayer width={"100%"} height={"100%"} url={youTubeProfileUrl} />
              </div>}
              <div className="basis-full md:basis-2/3 flex flex-col gap-1 ">
                  <p className='capitalize text-sm text-justify'>{aboutUs?.slice(0, 300)}{aboutUs?.length > 300 ? "..." : ""}</p>
                  {linkedInProfile && <a className='text-pri text-primary-700 underline font-semibold flex gap-1 items-center' href={"https://www.linked.com/in/" + linkedInProfile} target="_blank" rel="noopener noreferrer">https://www.linked.com/in/{linkedInProfile}<FiArrowUpRight className='stroke-2 text-sm' />
                  </a>}
                  <div className="flex gap-3">
                      <h6 className='text-[#646464] font-bold'>Organization name:</h6>
                      <p className='text-[#646464] font-normal capitalize'>{(organizationName === null && "-") || organizationName}</p>
                  </div>
              </div>
          </div>
          <Modal open={open} setOpen={setOpen}>
              <AboutBusinessForm setOpen={setOpen} prevData={data?.data} />
          </Modal>
          <button onClick={() => setOpen(true)} className='btn-outline'>Edit </button>
      </div>
  );
};