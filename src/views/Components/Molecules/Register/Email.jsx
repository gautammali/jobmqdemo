import React from 'react';
import { useNavigate } from 'react-router-dom';
import BtnSky from '../../Atoms/Buttons/BtnSky';

const Email = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("terms-of-use");
    }
    return (
        <div className='shadow-md rounded flex flex-col gap-4 p-4 font-semibold w-full'>
            <h2 className='text-2xl font-extrabold'>Email</h2>
            <p className=' font-normal'>Use an email address to create a JOBMQ account.</p>
            <div className="">
                <BtnSky onClick={()=>handleClick()}>Continue with email</BtnSky>
            </div>
        </div>
    );
};

export default Email;