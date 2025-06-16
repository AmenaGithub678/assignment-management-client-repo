import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';

const MyAttempted = () => {
const {user} = use(AuthContext);
const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/submittedAssignments/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAssignments(data));
    }
  }, [user?.email]);

    return (
<div className="p-4">
  <h2 className="text-2xl font-bold mb-4 text-center">My Submitted Assignments</h2>

  {/* Desktop Table */}
  <div className="overflow-x-auto hidden lg:block">
    <table className="table w-full min-w-[800px] border">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-4 py-2 text-left">Title</th>
          <th className="px-4 py-2 text-left">Status</th>
          <th className="px-4 py-2 text-left">Total Marks</th>
          <th className="px-4 py-2 text-left">Obtained</th>
          <th className="px-4 py-2 text-left">Feedback</th>
          <th className="px-4 py-2 text-left">Examiner</th>
        </tr>
      </thead>
      <tbody>
        {assignments.map((item, i) => (
          <tr key={i} className="border-t">
            <td className="px-4 py-2">{item.assignmentDetails?.title || "N/A"}</td>
            <td className="px-4 py-2">{item.status}</td>
            <td className="px-4 py-2">{item.assignmentDetails?.marks || "N/A"}</td>
            <td className="px-4 py-2">{item.obtainedMarks || "Pending"}</td>
            <td className="px-4 py-2">{item.feedback || "Not Available"}</td>
            <td className="px-4 py-2">{item.examiner || "-"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Mobile Cards */}
  <div className="lg:hidden space-y-4">
    {assignments.map((item, i) => (
      <div key={i} className="border p-4 rounded-lg shadow-md bg-white">
        <p><span className="font-semibold">Title:</span> {item.assignmentDetails?.title || "N/A"}</p>
        <p><span className="font-semibold">Status:</span> {item.status}</p>
        <p><span className="font-semibold">Total Marks:</span> {item.assignmentDetails?.marks || "N/A"}</p>
        <p><span className="font-semibold">Obtained:</span> {item.obtainedMarks || "Pending"}</p>
        <p><span className="font-semibold">Feedback:</span> {item.feedback || "Not Available"}</p>
        <p><span className="font-semibold">Examiner:</span> {item.examiner || "-"}</p>
      </div>
    ))}
  </div>
</div>


    );
};

export default MyAttempted;