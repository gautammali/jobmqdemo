import React from 'react';
import ChangePassword from '../../../Molecules/Accounts/Settings/ChangePassword';
import DeleteAccount from '../../../Molecules/Accounts/Settings/DeleteAccount';
// import SecurityQuestions from '../../Molecules/Accounts/Settings/SecurityQuestions';

const Settings = () => {
    return (
        <div className='flex flex-col gap-4 '>
            {/* <SecurityQuestions /> */}
            <ChangePassword />
            <DeleteAccount />
        </div>
    );
};

export default Settings;