import React, { useEffect } from "react";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { FaLinkedinIn } from 'react-icons/fa'
function Linkedin() {

    const { linkedInLogin } = useLinkedIn({
        clientId: "77o751rz0suq0c",
        redirectUri: `${window.location.origin}/linkedin`,
        onSuccess: (code) => {
            console.log(code);
            setCode(code);
            setErrorMessage("");
        },
        scope: "r_emailaddress r_liteprofile",
        onError: (error) => {
            console.log(error);
            setCode("");
            setErrorMessage(error.errorMessage);
        },
    });
    const [code, setCode] = React.useState("");
    const [errorMessage, setErrorMessage] = React.useState("");



    useEffect(() => {
        if (code) {
            const url = 'https://www.linkedin.com/oauth/v2/accessToken';
            const data = new URLSearchParams();
            data.append('grant_type', 'authorization_code');
            data.append('code', code);
            data.append('client_id', '77o751rz0suq0c');
            data.append('client_secret', 'JWKMlYaVu3ANTU9i');
            data.append('redirect_uri', `${window.location.origin}/linkedin`);
            try {
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    },
                    body: data
                }).then(response => response.json())

                // if (response.ok) {
                //     const accessToken = await response.json();
                //     // Handle the access token as needed
                //     console.log(accessToken);
                // } else {
                //     // Handle error response
                //     console.error('Error:', response.status);
                // }
            } catch (error) {
                // Handle network or other fetch-related errors
                console.error('Error:', error);
            }
        }
    }, [code]);

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


