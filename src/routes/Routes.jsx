/* eslint-disable no-lone-blocks */
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import useAuthCheck from "../hooks/useAuthCheck";
import { Main } from "../layouts";

import Details from "../views/Components/Organisms/Account/Individuals/Details";
import IdentityAndReferees from "../views/Components/Organisms/Account/Individuals/IdentityAndReferees";

import BusinessDetails from "../views/Components/Organisms/Account/Businesses/Details";

import ProviderAndSupport from "../views/Components/Organisms/Account/ProviderAndSupport";
import Notifications from "../views/Components/Organisms/Account/Notifications";
import PrivacySettings from "../views/Components/Organisms/Account/PrivacySettings";
import Settings from "../views/Components/Organisms/Account/Settings";

// import BusinessIdentityAndReferees from '../views/Components/Organisms/Account/Businesses/IdentityAndReferees';

import Businesses from "../views/Pages/Businesses/Businesses";
import Home from "../views/Pages/Home/Home";
// import Login from '../views/Pages/Login/Login';
// import Register from '../views/Pages/Register/Register';

import IndividualAccount from "../views/Pages/Profile/Individuals/Account";
// import Individuals from '../views/Pages/Profile/Individuals/Individuals';
import IndividualProfile from "../views/Pages/Profile/Individuals/Profile";

import BusinessAccount from "../views/Pages/Profile/Businesses/Account";
// import Businesses from '../views/Pages/Profile/Businesses/Individuals';
import BusinessProfile from "../views/Pages/Profile/Businesses/Profile";

// auth checking
import BusinessesCheck from "./Businesses";
import IndividualCheck from "./Individual";
import Public from "./Public";

// create and login for individuals users
import LoginFrom from "../views/Components/Organisms/Login/LoginFrom";
import ForgotPassword from "../views/Components/Organisms/Register/Individuals/ForgotPassword";
import TermsOfUse from "../views/Components/Organisms/Register/Individuals/TermsOfUse";
import EnterAnEmail from "../views/Components/Organisms/Register/Individuals/EnterAnEmail";
import CreatePassword from "../views/Components/Organisms/Register/Individuals/CreatePassword";
import EnterCode from "../views/Components/Organisms/Register/Individuals/EnterCode";
import RegisterForm from "../views/Components/Organisms/Register/Individuals/RegisterForm";

// create and login for businesses users
import ForgotPasswordBusiness from "../views/Components/Organisms/Register/Businesses/ForgotPassword";
import TermsOfUseBusiness from "../views/Components/Organisms/Register/Businesses/TermsOfUse";
import EnterAnEmailBusiness from "../views/Components/Organisms/Register/Businesses/EnterAnEmail";
import CreatePasswordBusiness from "../views/Components/Organisms/Register/Businesses/CreatePassword";
import EnterCodeBusiness from "../views/Components/Organisms/Register/Businesses/EnterCode";
import RegisterFormBusiness from "../views/Components/Organisms/Register/Businesses/RegisterForm";
import CreateJob from "../views/Pages/Job/CreateJob";
import Jobs from "../views/Pages/Job/Jobs";
import Updatejob from "../views/Pages/Job/Updatejob";
import JobDetails from "../views/Pages/Job/JobDetails";
import JobList from "../views/Pages/Job/Public/JobList";
import PublicJobDetails from "../views/Pages/Job/Public/PublicJobDetails";
import ApplyJob from "../views/Pages/Job/ApplyJob/ApplyJob";
import ApplySuccess from "../views/Pages/Job/ApplyJob/ApplySuccess";
import ManageApplicant from "../views/Pages/Job/ManageJob/ManageApplicant";
import AppliedJobs from "../views/Pages/Job/AppliedJobs/AppliedJobs";
import CallBack from "../views/Components/Molecules/Register/CallBack";
import { LinkedInCallback } from "react-linkedin-login-oauth2";
import PrivacyPage from "../views/Pages/PrivacyPage";
import TermsPage from "../views/Pages/TermsPage";
import Logout from "../layouts/Main/Header/Logout";

const MainRoutes = () => {
  const authChecked = useAuthCheck();
  return !authChecked ? (
    <div className="">Checking Authentication.....</div>
  ) : (
    <Routes>
      <Route path="/linkedin" element={<LinkedInCallback />} />
      <Route path="/linkedin-callback" element={<CallBack />} />
      <Route path="/" element={<Main />}>
        <Route index element={<Navigate to={'/jobs'} />} />
        {/* <Route index element={<Home />} /> */}
        <Route path="jobs">
          <Route index element={<JobList />} />
          <Route path=":id">
            <Route index element={<Navigate to={'/jobs'} />} />
            <Route path=":slug" element={<PublicJobDetails />} />
          </Route>
          <Route path="applied" element={<IndividualCheck />}>
            <Route index element={<AppliedJobs />} />
          </Route>
          <Route path="apply" element={<IndividualCheck />}>
            <Route index element={<JobList />} />
            <Route path=":id" element={<ApplyJob />} />
            <Route path="success" element={<ApplySuccess />} />
          </Route>
          <Route path="manage-applicants" element={<BusinessesCheck />}>
            <Route index element={<ManageApplicant />} />
            <Route path=":id" element={<ApplyJob />} />
            <Route path="success" element={<ApplySuccess />} />
          </Route>
        </Route>

        <Route path="/individuals">
          <Route index element={<Home />} />
          
          <Route path="login" element={<Public />}>
            <Route index element={<LoginFrom />} />
          </Route>

          <Route path="create-account" element={<Public />}>
            <Route index element={<RegisterForm />} />
            <Route path="enter-an-email" element={<EnterAnEmail />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="terms-of-use" element={<TermsOfUse />} />
            <Route path="enter-code" element={<EnterCode />} />
            <Route path="create-password" element={<CreatePassword />} />
          </Route>

          <Route path="profile" element={<IndividualCheck />}>
            <Route index element={<IndividualProfile />} />
            <Route path="account" element={<IndividualAccount />}>
              <Route index path="details" element={<Details />} />
              <Route path="provider" element={<ProviderAndSupport />} />
              <Route
                path="identity-referees"
                element={<IdentityAndReferees />}
              />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile-visibility" element={<PrivacySettings />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

        </Route>

        <Route path="/businesses">
          <Route index element={<Businesses />} />

          <Route path="login" element={<Public />}>
            <Route index element={<LoginFrom />} />
          </Route>

          <Route path="create-account" element={<Public />}>
            <Route index element={<RegisterFormBusiness />} />
            <Route
              path="forgot-password"
              element={<ForgotPasswordBusiness />}
            />
            <Route path="terms-of-use" element={<TermsOfUseBusiness />} />
            <Route path="enter-an-email" element={<EnterAnEmailBusiness />} />
            <Route path="enter-code" element={<EnterCodeBusiness />} />
            <Route
              path="create-password"
              element={<CreatePasswordBusiness />}
            />
          </Route>

          <Route path="profile" element={<BusinessesCheck />}>
            <Route index element={<BusinessProfile />} />
            <Route path="account" element={<BusinessAccount />}>
              <Route index path="details" element={<BusinessDetails />} />
              <Route path="provider" element={<ProviderAndSupport />} />
              <Route path="notifications" element={<Notifications />} />
              <Route path="profile-visibility" element={<PrivacySettings />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>

          <Route path="jobs" element={<BusinessesCheck />}>
            <Route index element={<Jobs />} />
            <Route path=":id" element={<JobDetails />} />
            <Route path="create" element={<CreateJob />} />
            <Route path="update/:id" element={<Updatejob />} />
          </Route>
        </Route>

        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/logout" element={<Logout />} />

      </Route>
    </Routes>
  );
};

export default MainRoutes;

// <Route path="/" element={<Main />}>
// <Route index element={<Home />} />
// <Route path='individual' element={<Home />}>

// </Route>
// <Route path='business' element={<Businesses />} />

{
  /* individual routes  */
}
{
  /* <Route path='individuals' element={<Individual />}>
    <Route index element={<Individuals />} />
    <Route path="profile" element={<Profile />} />
    <Route path="account" element={<Account />}>
        <Route index path="details" element={<Details />} />
        <Route path="provider" element={<ProviderAndSupport />} />
        <Route path="identity-referees" element={<IdentityAndReferees />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile-visibility" element={<PrivacySettings />} />
        <Route path="settings" element={<Settings />} />
    </Route>
</Route> */
}

// </Route>

{
  /* Publice routes  */
}
{
  /* <Route path="/" element={<Public />}>
<Route path="login" element={<Auth />}>
    <Route index element={<Login />} />
</Route>

<Route path="create-account" element={<Auth />}>
    <Route index element={<Register />} />
    <Route path="forgot-password" element={<ForgotPassword />} />
    <Route path="terms-of-use" element={<TermsOfUse />} />
    <Route path="enter-an-email" element={<EnterAnEmail />} />
    <Route path="enter-code" element={<EnterCode />} /> */
}
{
  /* <Route path="enter-your-mobile" element={<EnterYourMobile />} /> */
}
//     <Route path="create-password" element={<CreatePassword />} />

// </Route>
// </Route>
