import React from "react";
import { LinkedIn } from 'react-linkedin-login-oauth2';

function LinkedinLogin() {
  const handleLinkedInFailure = (response) => {
    console.log(response);
  };

  const handleLinkedInSuccess = (response) => {
    console.log(response); // Make sure to handle the response data properly
    // Extract user information from the response and handle it as needed
  };

  return (
    <LinkedIn
    
      clientId="77o751rz0suq0c"
      closePopupMessage="x"
      state={(v)=>console.log(v)}
      onFailure={handleLinkedInFailure}
      onSuccess={handleLinkedInSuccess}
      redirectUri={`http://localhost:3000/linkedin-callback`} // Update with your server's callback URL
    >
      {({ linkedInLogin }) => (
        <button onClick={linkedInLogin}>Login with LinkedIn</button>
      )}
    </LinkedIn>
  );
}

export default LinkedinLogin;
