import React from 'react';

const Faq = () => {
    return (
        
<div className='lg:p-10 bg-gray-100'>
<div className='text-center mx-auto my-8'>
    <h1 className='font-normal text-xl lg:text-4xl text-[#AD56C4]'>
   Frequency and Questions
  </h1>
  </div>

 <div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" defaultChecked />
  <div className="collapse-title font-semibold text-2xl text-[#f000b8]">How can I join the AssignMate?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]">You can join by registering with your name, email, photo URL, and password. You can also log in with Google </div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title  font-semibold text-2xl text-[#f000b8]"> Can I create assignments for other users?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]"> Yes! Once logged in, you can create assignments for all users with a title, marks, difficulty level, and due date.</div>
</div>
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title  font-semibold text-2xl text-[#f000b8]">Who can view or complete an assignment?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]"> Every registered user can view and attempt any assignment, regardless of who created it.</div>
</div>  
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title  font-semibold text-2xl text-[#f000b8]">Is the system secure?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]"> Yes, the system uses JWT authentication to protect private routes. Firebase credentials and MongoDB access details are securely stored using environment variables, preventing unauthorized access.</div>
</div>  
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title  font-semibold text-2xl text-[#f000b8]">What makes this app recruiter-friendly?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]">The app uses modern tools and follows best practices like clean design, responsive layout, meaningful commit history, secure data handling, and a structured README file — all of which impress recruiters.</div>
</div>  
<div className="collapse collapse-plus bg-base-100 border border-base-300">
  <input type="radio" name="my-accordion-3" />
  <div className="collapse-title  font-semibold text-2xl text-[#f000b8]">Can this platform help me prepare for real-world projects?</div>
  <div className="collapse-content text-xl font-normal tracking-wide text-[#FF8DA1]">Yes! This system is built using the full MERN stack, which is widely used in real-world applications. It gives you hands-on experience with authentication, CRUD operations, protected routes, and more.
</div>
</div>  
</div>
    );
};

export default Faq;