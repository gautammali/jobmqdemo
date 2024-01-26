import React from 'react';
import './Loading.css';


const Loading = () => {
    return <div className="overlay">
        <div className="spinner-container">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2"></div>
        </div>
    </div>
};

export default Loading;