import React from 'react';
import Address from '../../Molecules/Accounts/Details/Address';
// import HomePhoneNumber from '../../Molecules/Accounts/Details/HomePhoneNumber';
// import MobilePhoneNumber from '../../Molecules/Accounts/Details/MobilePhoneNumber';
import PersonalDetails from '../../Molecules/Accounts/Details/PersonalDetails';
import PersonalStatistics from '../../Molecules/Accounts/Details/PersonalStatistics';
// import Resume from '../../Molecules/Accounts/Details/Resume';

const Details = () => {
    return (
        <div className='flex flex-col gap-4 '>
            <PersonalDetails />
            <Address />
            <PersonalStatistics />
            {/* <Resume /> */}
            {/* <MobilePhoneNumber /> */}
        </div>
    );
};

export default Details;