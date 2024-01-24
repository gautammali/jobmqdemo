import React from 'react';
import Address from '../../../Molecules/Accounts/Businesses/BusinessDetails/Address';
import PersonalDetails from '../../../Molecules/Accounts/Businesses/BusinessDetails/BusinesslDetails';

const Details = () => {
    return (
        <div className='flex flex-col gap-4 '>
            <PersonalDetails />
            <Address />
        </div>
    );
};

export default Details;