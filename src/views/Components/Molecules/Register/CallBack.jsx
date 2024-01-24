import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = ({ onAuth }) => {
    const location = useLocation();
    const your_client_id = "77o751rz0suq0c"
    const your_callback_url = "http://localhost:3000/linkedin-callback"
    useEffect(() => {
        const code = location.search.replace("?code=", "");

        if (code) {
            // Send the authorization code to your server-side for further processing
            // Your server-side should exchange the authorization code for an access token

            // Example of sending the authorization code to your server using fetch:
            // fetch('https://www.linkedin.com/oauth/v2/accessToken', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ code }),
            // })
            //     .then((response) => response.json())
            //     .then((data) => {
            //         // Handle the server response, e.g., store the access token in local storage
            //         onAuth(data.access_token);
            //     })
            //     .catch((error) => {
            //         console.error('Error exchanging authorization code:', error);
            //     });
            fetch(`https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${your_client_id}&redirect_uri=${your_callback_url}&state=foobar&scope=r_liteprofile%20r_emailaddress%20w_member_social`).then((response) => response.json()).then((data) => {
                // Handle the server response, e.g., store the access token in local storage
                onAuth(data.access_token);
            }
            ).catch((error) => {
                console.error('Error exchanging authorization code:', error);
            }
            );
        }
    }, [location.search, onAuth]);

    return <div>Processing...</div>;
};

export default Callback;
