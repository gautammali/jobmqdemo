import React from 'react';
import Digital from '../../Molecules/Register/Digital';
import Email from '../../Molecules/Register/Email';

const CreateAccount = () => {
    return (
        <div>
            <h3 className='text-[36px] font-extrabold'>Create a JOBMQ account</h3>
            <p className='pt-3 pb-10'>Choose how to create your JOBMQ account. If you already have a JOBMQ account sign in.</p>
            <div className="flex md:flex-row flex-col gap-6 items-center w-max mx-auto md:mx-0">
                <Email />
                <div className="rounded-full bg-gray-200 p-2">OR</div>
                <Digital />
            </div>

        </div>
    );
};

export default CreateAccount;