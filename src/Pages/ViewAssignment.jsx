import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../Context/AuthContext';
import ViewModal from '../Componets/ViewModal';

const ViewAssignment = () => {
 const assignments = useLoaderData();

 const [showModal, setShowModal] = useState(false);
  const { user } = use(AuthContext);
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

      <button
        onClick={() => setShowModal(true)}
        className="btn btn-primary"
      >
        Take Assignment
      </button>

      {/* Modal */}
      {showModal && (
        <ViewModal
          assignmentId={assignments._id}
          userEmail={user.email}
          closeModal={() => setShowModal(false)}
        />
      )}
    </div> 
        </div>
    );
};

export default ViewAssignment;
