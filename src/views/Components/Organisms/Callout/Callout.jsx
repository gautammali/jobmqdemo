import React from 'react';
import { NavLink } from 'react-router-dom';
import bussiness from '../../../../assets/businessman.png'
import Rectangle from '../../../../assets/Rectangle.png'
const Callout = ({ info }) => {
    return (
        <div className="relative h-auto sm:h-[574px] flex">
            <img src={Rectangle} className='w-full hidden md:block' alt="" />
            <img src={bussiness} className='w-full ' alt="" />
            <div className="absolute inset-0">
                <div className='container h-full flex justify-start items-center'>
                    <div className="flex flex-col gap-8 justify-center max-w-[572px] w-full">
                        <h3 className='text-[40px] font-semibold font-roboto text-site-bg-300 leading-[50px]'>{info?.title}</h3>
                        <p className=' font-roboto font-normal text-lg text-site-text-200'>{info?.desc}</p>

                        <NavLink to={info.url} className={"max-w-[368px] w-full h-[57px] bg-site-bg-300 rounded-[5px] text-white text-[22px] font-normal font-roboto leading-[33px] flex justify-center items-center"}>{info?.link}</NavLink>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callout;