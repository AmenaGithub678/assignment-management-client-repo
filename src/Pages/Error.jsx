import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
       <div
      className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/whYpMdXt/404-error-with-person-looking-for-bro.png')",
      }}
    >
      <div className="p-8 rounded-lg text-center text-[#AD56C4] max-w-md">
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="mb-6">
          Oops! The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-lg font-medium transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
    );
};

export default Error;