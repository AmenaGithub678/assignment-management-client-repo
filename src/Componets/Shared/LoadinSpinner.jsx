import React from 'react';

const LoadinSpinner = () => {
    return (
         <div>
<div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70">
<span className="loading loading-spinner loading-lg text-neutral"></span>
    </div>
        </div>
    );
};

export default LoadinSpinner;