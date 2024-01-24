import React from 'react';
import Address from '../../../Molecules/Accounts/Details/Address';
import PersonalDetails from '../../../Molecules/Accounts/Details/PersonalDetails';
import PersonalStatistics from '../../../Molecules/Accounts/Details/PersonalStatistics';

const Details = () => {
    return (
        <div className='flex flex-col gap-4 '>
            <PersonalDetails />
            <Address />
            <PersonalStatistics />
        </div>
    );
};

export default Details;