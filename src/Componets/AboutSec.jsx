import React from 'react';

const AboutSec = () => {
    return (
   <div className="mx-auto">
  <div
    className="flex flex-col overflow-hidden rounded shadow-sm lg:flex-row sm:mx-auto 
               transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-lg"
  >
    {/* Image Section with Hover Fade Overlay */}
    <div className="relative lg:w-1/2 group">
      <img
        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        alt="Team collaboration"
        className="object-cover w-full lg:absolute h-80 lg:h-full"
      />
      <div
        className="absolute inset-0 flex flex-col justify-center items-center px-5 py-4 text-center 
                   bg-black bg-opacity-75 opacity-0 transform translate-y-4
                   transition-all duration-500 ease-in-out 
                   group-hover:opacity-100 group-hover:translate-y-0"
      >
        <p className="text-white text-lg font-semibold">Streamline Your Work</p>
        <p className="text-gray-300 text-sm">Manage assignments with ease</p>
      </div>

      <svg
        className="absolute top-0 right-0 hidden h-full text-white lg:inline-block"
        viewBox="0 0 20 104"
        fill="currentColor"
      >
        <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
      </svg>
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-center p-8 bg-white lg:p-16 lg:pl-10 lg:w-1/2">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-[#AD56C4] uppercase rounded-full bg-teal-accent-400">
          About Us
        </p>
      </div>
      <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-[#f000b8]">
        Simplifying Assignment Management
      </h5>
      <p className="mb-5 text-[#AD56C4]">
        Our Assignment Management System is designed to make academic and project work 
        stress-free. Whether you're a student tracking deadlines or an educator 
        organizing submissions, our platform centralizes all tasks, improves 
        collaboration, and ensures you never miss a due date again. With intuitive 
        tools and real-time updates, managing assignments has never been easier.
      </p>
      <div className="flex items-center">
        
<button className="btn text-[#f000b8] btn-outline mr-6 ">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]"><path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" /></svg>
  Get Started
</button>


        {/* <button
          type="submit"
          className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium text-[#f000b8] transition duration-200 rounded  btn btn-outline btn-secondary"
        >
          Get Started
        </button> */}
        <a
          href="/"
          aria-label=""
          className="inline-flex text-[#f000b8] items-center font-semibold transition-colors duration-200 hover:text-purple-800"
        >
          Learn More
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</div>

    );
};

export default AboutSec;