import React from 'react';
import { useLoaderData } from 'react-router';

const ViewAssignment = () => {
 const assignments = useLoaderData();
    return (
 <div>
   <div className="max-w-3xl mx-auto mt-10 p-6 bg-[#FFC2BA] shadow rounded-lg my-5">
      <img src={assignments.thumbnail} alt="Assignment" className="w-full h-64 object-cover rounded" />
      <h2 className="text-3xl font-bold text-[#AD56C4] mt-4">{assignments.title}</h2>
      <p className="text-[#f000b8] my-3">{assignments.description}</p>
      <p className="text-lg font-medium text-gray-800">Marks: {assignments.marks}</p>
      <p className="text-md text-gray-600 mt-1">Difficulty: 
        <span className="ml-2 inline-block px-2 py-1 rounded bg-pink-200 text-pink-800">{assignments.difficulty}</span>
      </p>
      <p className="text-md mt-1 text-gray-500">Due: {new Date(assignments.dueDate).toLocaleDateString()}</p>
      <p className="text-md mt-1 text-gray-500">Assigned by: {assignments.email}</p>

      <button className="btn btn-secondary">Take a Assignment</button>
    </div> 
        </div>
    );
};

export default ViewAssignment;
