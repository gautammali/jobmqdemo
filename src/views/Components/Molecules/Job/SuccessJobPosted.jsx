
import React from 'react'
import { Link } from 'react-router-dom';
import success from '../../../../assets/successfully.png'

export default function SuccessJobPosted() {
    return (
        <div className="container md:mt-10">
            <div className="flex flex-col items-center">
                <div className="">
                    <img src={success} alt="" />
                </div>

                <div className="mt-3 text-2xl font-bold text-gray-800">
                    Your job has been submitted successfully.
                </div>
                <div className="text-sm font-semibold text-gray-500 max-w-3xl text-center mt-5">
                    We will review your job shortly. You will be informed by email that your job has been accepted. Also, make sure your <Link to={'/businesses/job'} ><span className="text-indigo-600">Job</span></Link> is correct and valid.
                </div>
                <Link to="/businesses/profile">
                    <button className="h-10 mt-5 px-5 text-indigo-700 bg-indigo-100 transition-colors duration-150 border border-indigo-200 rounded-lg focus:shadow-outline hover:bg-indigo-500 hover:text-indigo-100 font-semibold">
                        Back to profile
                    </button>
                </Link>
            </div>
        </div>
    );
}

