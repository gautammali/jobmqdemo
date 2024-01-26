import React from 'react';
import { Link } from 'react-router-dom';
import JWeb from "../../../assets/Orignal.png";
import {
    FacebookShareButton,
    LinkedinShareButton,
    TwitterShareButton,
} from "react-share";
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';

const Footer = () => {
    return (
        <>
            <div className="bg-cyan-600 w-full h-20">
                <div className="container flex justify-between items-center h-full">
                    <div className="flex gap-3 items-center">

                        <h3 className='text-white font-semibold'>Follow Us</h3>
                        <a href="http://facebook.com/iazadur" target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <FaFacebookF size={20} round={'true'} />
                        </a>
                        <a href="http://facebook.com/iazadur" target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <AiOutlineTwitter size={20} round={'true'} />
                        </a>
                        <a href="http://facebook.com/iazadur" target="_blank" rel="noopener noreferrer" className="border p-1 text-white">
                            <FaLinkedinIn size={20} round={'true'} />
                        </a>

                    </div>
                    <div className="flex gap-3 items-center">

                        <h3 className='text-white font-semibold'>Share</h3>

                        <FacebookShareButton url={window.location.href}>
                            <div className="border p-1 text-white">
                                <FaFacebookF size={20} round={'true'} />
                            </div>
                        </FacebookShareButton>


                        <TwitterShareButton url={window.location.href}>
                            <div className="border p-1 text-white">
                                <AiOutlineTwitter size={20} round={'true'} />
                            </div>
                        </TwitterShareButton>

                        <LinkedinShareButton url={window.location.href}>
                            <div className="border p-1 text-white">
                                <FaLinkedinIn size={20} round={'true'} />
                            </div>
                        </LinkedinShareButton>

                    </div>
                </div>
            </div>
            <footer className=" bg-site-bg-300 text-white">
                <div className="py-16">
                    <div className="container flex flex-wrap">

                        <div className="basis-full sm:basis-1/4 p-4 flex flex-col gap-2">
                            <Link to='/'>
                                <div className="pb-5">
                                    <img className='max-w-[200px]' src={JWeb} alt="" />
                                </div>
                            </Link>
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium'>JOB MESSAGE QUEUE</h4>
                            <p className='font-roboto font-normal text-lg'>Serving the community a better open channel to extinct their potential. Job Message Queue deliver the service of Job Messages between the Job Seeker and Job Provider.</p>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>FOR EMPLOYERS</h4>
                            <div className="flex flex-col gap-2">
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Post a Job</p></Link>
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Manage Jobs</p></Link>
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Manage Application</p></Link>
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Contact us</p></Link>
                            </div>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>IMPORTANT LINKS</h4>
                            <div className="flex flex-col gap-2">
                                <Link to='/terms'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Terms of use</p></Link>
                                <Link to='/privacy'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Privacy Policy</p></Link>
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>Job Categories Home</p></Link>
                                <Link to='/'><p className='font-roboto font-normal text-lg hover:text-[#3b5998] transition_1'>About us</p></Link>
                            </div>
                        </div>
                        <div className="basis-full sm:basis-1/4 p-4 ">
                            <h4 className='text-[22px] uppercase leading-[50px] font-roboto font-medium pb-6'>EMIRATISATION CAMPAIGN</h4>
                            <p className='font-roboto font-normal text-lg'><span>Emiratisation Campaign</span> specially desgined for growing Emiratisation Talent Acquisition needs.
                                Its very simple and convenient way to connect with the community and observing the job feeds on daily basis.</p>
                        </div>
                    </div>
                </div>
                <div className="border-t container py-5">
                    <p className='text-center'>© 2018-2023 JobMQ. Designed with  Power by Allelife Consulting.</p>
                </div>
            </footer >
        </>
    );
};

export default Footer;