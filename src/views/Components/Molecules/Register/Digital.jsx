import React from 'react';
import FbLogin from './FbLogin';
import GLogin from './GLogin';
import Linkedin from './Linkedin';

const Digital = () => {
    return (
        <div className='shadow-md rounded flex flex-col gap-4 p-4 w-full'>
            <h2 className='text-2xl font-extrabold'>Digital Social Identity</h2>
            <p className='font-normal'>Use JOBMQID to create a JOBMQ account.</p>
            {/* <div className="font-semibold">
                <BtnBorder>Continue with Digital Social Identity</BtnBorder>
            </div> */}
            <FbLogin />
            <GLogin />
            <Linkedin />
            {/* <p className='font-normal text-sm'>What is <span className="underline text-sky-800">Digital Identity</span> and <span className="underline text-sky-800">JOBMQID</span>  ?</p> */}
        </div>
    );
};





export default Digital;