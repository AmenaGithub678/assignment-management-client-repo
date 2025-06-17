import React, { use, useEffect, useState } from 'react';

import { AuthContext } from '../Context/AuthContext';
import Evalute from '../Componets/Evalute';

const PendingAssignment = () => {
  const { user } = use(AuthContext);
  const [pendingList, setPendingList] = useState([]);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/submittedAssignments`)
      .then(res => res.json())
      .then(data => {
        const pending = data.filter(item => item.status === 'pending');
        setPendingList(pending);
      });
  }, []);

    return (
<div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center text-[#AD56C4]">Pending Assignments to Evaluate</h2>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {pendingList.map((item, i) => (
          <div key={i} className="border shadow p-4 rounded space-y-2 bg-white">
            <h3 className="text-lg font-semibold text-[#FD3DB5]">
            
              {item.assignmentDetails?.title || 'Unknown Assignment'}
            </h3>

          <p>
  <strong>Submitted by:</strong>{' '}
  {item.email === user?.email 
    ? <span className="text-[#FD3DB5]">You</span> 
    : item.name || item.email} 
</p>

           
            {item.email !== user?.email && (
              <button
                className="btn btn-sm btn-primary"
                onClick={() => setSelectedAssignment(item)}
              >
                Give Mark
              </button>
            )}
          </div>
        ))}
      </div>

      {selectedAssignment && (
        <Evalute
          assignment={selectedAssignment}
          onClose={() => setSelectedAssignment(null)}
          onMarkComplete={() => {
            setPendingList(pendingList.filter(p => p._id !== selectedAssignment._id));
            setSelectedAssignment(null);
          }}
        />
      )}
    </div>
    );
};

export default PendingAssignment;