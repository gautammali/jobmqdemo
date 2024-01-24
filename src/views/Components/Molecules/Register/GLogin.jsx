import React, { useEffect } from 'react'
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script'
import { useExternalUserMutation } from '../../../../features/auth/registerApi';


export default function GLogin() {
    const [externalUser] = useExternalUserMutation()
    const clientId = "147825234918-ukadobnfboqgj90av65mb158smi9k0e7.apps.googleusercontent.com"
    useEffect(() => {
        gapi.load('client:auth2', () => {
            gapi.auth2.init({ clientId: clientId })
        })
    }, [])

    const responseGoogle = (response) => {
        const data = {
            firstName: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            profilePic: response.profileObj.imageUrl,
            externalId: response.profileObj.googleId,
            loginType: "Google"
        }
        externalUser(data)
    }




    return (
        <GoogleLogin
            clientId={clientId}
            buttonText="Continue with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className="w-full"
        />
    )
}

