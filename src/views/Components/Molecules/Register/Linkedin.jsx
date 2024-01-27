import React, { useEffect } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { FaLinkedinIn } from 'react-icons/fa'
import { useExternalUserMutation } from '../../../../features/auth/registerApi';
function Linkedin({setExternalLoginSuccess}) {
    const [externalUser] = useExternalUserMutation()
    const { linkedInLogin } = useLinkedIn({
        clientId: "776k4gh77wda46",
        redirectUri: `${window.location.origin}/linkedin`,
        onSuccess: (code) => {
            console.log(code);
            setCode(code);
            setErrorMessage("");
        },
        scope: "openid profile w_member_social email",
        onError: (error) => {
            console.log(error,code);
            setCode("");
            setErrorMessage(error.errorMessage);
        },
    });
    const [code, setCode] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");

    const requestAccessToken = async (code, state) => {
        const url = 'https://www.linkedin.com/oauth/v2/accessToken';
        const data = {
            'grant_type': 'authorization_code',
            'code': code,
            'redirect_uri': `${window.location.origin}/linkedin`,
            'client_id': '776k4gh77wda46',
            'client_secret': 'QjpYVnuaRdnhvEeJ',
            'state': state
        };
    
        try {
            setExternalLoginSuccess(true);
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: JSON.stringify(data)
            });
    
            if (!response.ok) {
                await getDataFromExternallyServer();
                return;
            }
    
            const token = await response.json();
            if (token) {
                await getUserDetails(token.access_token);
            }
        } catch (error) {
            console.error('Error:', error);
            getDataFromExternallyServer();
        }
    };
    
    useEffect(() => {
        if (code) {
            requestAccessToken(code, '12345');
        }
    }, [code]);
    
    const getDataFromExternallyServer = async () => {
        const url = 'https://linkedlnloginserver.onrender.com/callback';
        // const url = 'http://localhost:3006/callback';
        const data = {
            'code': code,
            'state': '12345',
            'redirectUrl':'https://jobmqdemo.onrender.com/linkedin',
            'systemString' : '776k4gh77wda46',
            'authsampleCode' : 'QjpYVnuaRdnhvEeJ'
        };
    
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });
    
            const user = await response.json();
            if (user.profile) {
                const data = {
                    firstName: user.profile.given_name,
                    lastName: user.profile.family_name,
                    email: user.profile.email,
                    profilePic: user.profile.picture,
                    externalId: user.profile.sub,
                    loginType: "linkedin",
                };
                externalUser(data);
                setExternalLoginSuccess(false);
            }
        } catch (error) {
            console.error('Error fetching data from external server:', error);
        }
    };
    
    const getUserDetails = async (access_token) => {
        const apiUrl = 'https://api.linkedin.com/v2/userinfo';
        const headers = {
            'Authorization': `Bearer ${access_token}`,
            'Content-Type': 'application/json',
        };
        const options = {
            method: 'GET',
            headers: headers,
        };
    
        try {
            const response = await fetch(apiUrl, options);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
    
            const user = await response.json();
            if (user.body || user.data) {
                const data = {
                    firstName: user.body.given_name || user.data['given_name'],
                    lastName: user.body.family_name || user.data['family_name'],
                    email: user.body.email || user.data['email'],
                    profilePic: user.body.picture || user.data['picture'],
                    externalId: user.body.sub || user.data['sub'],
                    loginType: "linkedin",
                };
                externalUser(data);
                setExternalLoginSuccess(false);
            }
        } catch (error) {
            console.error('Error fetching data from LinkedIn API:', error);
        }
    };
    

    return (<>
        <button onClick={linkedInLogin} className="flex gap-5 items-center bg-white w-full py-3 px-[10px] text-gray-600 hover:text-gray-400 text-sm rounded shadow-md group/item transition_1">
            <FaLinkedinIn className="text-lg group-hover/item:text-[#0072b1] text-[#0072b1]" />
            <p>Continue with Linkedin</p>
        </button>

        {/* {code && (
            <div>
                <div>Authorization Code: {code}</div>
                <div>
                    Follow{" "}
                    <a
                        target="_blank"
                        href="https://docs.microsoft.com/en-us/linkedin/shared/authentication/authorization-code-flow?context=linkedin%2Fconsumer%2Fcontext&tabs=HTTPS#step-3-exchange-authorization-code-for-an-access-token"
                        rel="noreferrer"
                    >
                        this
                    </a>{" "}
                    to continue
                </div>
            </div>
        )} */}
        {errorMessage && <div>{errorMessage}</div>}
    </>);
}



export default Linkedin;