import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AssignmentCard from '../Componets/AssignmentCard';

const Assignments = () => {
  // const { user } = use(AuthContext);
 const [assignments, setAssignments] = useState([]);

 useEffect(() => {
    fetch('http://localhost:3000/createAssignment')
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  const handleDelete = (id) => {
    console.log('Delete assignment with ID:', id);
    
  };

  const handleUpdate = (assignment) => {
    console.log('Update assignment:', assignment);
  
  };

    return (
<div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-[#AD56C4] mb-8">All Assignments</h1>

      {assignments.length === 0 ? (
        <p className="text-center text-gray-400">No assignments available.</p>
      ) : (
        <div className="space-y-6">
          {assignments.map((assignment) => (
            <AssignmentCard
              key={assignment._id}
              assignment={assignment}
              handleDelete={handleDelete}
              handleUpdate={handleUpdate}
            />
          ))}
        </div>
      )}
    </div>
    );
};

export default Assignments;