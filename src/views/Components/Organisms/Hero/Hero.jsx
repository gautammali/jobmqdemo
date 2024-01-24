import React from "react";
import youngWoman from '../../../../assets/young-woman.png'
import JobSearch from "../../Molecules/Job/JobSearch";
const Hero = ({ info }) => {
  return (
    <div className="bg-[#D7DDDD]">
      <div className="container relative flex items-center gap-8 md:flex-nowrap flex-wrap pt-5">
        <div className="basis-full md:basis-6/12">
          <h1 className="text-[60px] font-medium font-roboto leading-[80px] text-site-bg-300">
            {info?.title}
          </h1>
          <h4 className="text-[26px] font-normal font-roboto leading-[45px] text-site-text-200">{info?.desc}</h4>
        </div>
        <div className="basis-full md:basis-6/12 ">
          <img src={youngWoman} alt="" />
        </div>


        <div className="absolute -bottom-16 left-0 right-0">
          <JobSearch />
        </div>
      </div>
    </div>
  );
};

export default Hero;
