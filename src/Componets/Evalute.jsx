import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { RxCross2 } from "react-icons/rx";
const Evalute = ({ assignment, onClose, onMarkComplete }) => {
const [marks, setMarks] = useState('');
  const [feedback, setFeedback] = useState('');
    const handleEvaluation = async (e) => {
    e.preventDefault();

    if (!marks || isNaN(marks)) {
      Swal.fire('Error', 'Please enter a valid mark.', 'error');
      return;
    }

    const updateData = {
      obtainedMarks: parseInt(marks),
      feedback,
      examiner: assignment?.reviewerName || 'Admin'
    };
    try {
      const res = await fetch(`https://my-assignmates-server-side.vercel.app/submittedAssignments/${assignment._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateData)
      });

      const result = await res.json();
      if (result.modifiedCount > 0) {
        Swal.fire('Success', 'Evaluation submitted.', 'success');
        onMarkComplete(); // remove from pending list
      } else {
        Swal.fire('Error', 'Something went wrong.', 'error');
      }
    } catch (err) {
      console.error(err);
      Swal.fire('Error', 'Submission failed.', 'error');
    }
  };


    return (
       <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-xl text-gray-500"><RxCross2 /></button>

        <h2 className="text-xl font-bold mb-4 text-[#AD56C4]">Evaluate Submission</h2>
        
        <h3 className="text-lg font-semibold mb-2 text-[#FD3DB5]">{assignment.assignmentDetails?.title}</h3>

        <p className="text-sm text-gray-600 mb-1 font-medium">Notes:</p>
        <div className="mb-3">
          <a
            href={assignment.docLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            View submission
          </a>
        </div>

        <form onSubmit={handleEvaluation} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-1">Enter Marks</label>
            <input
              type="number"
              className="w-full border p-2 rounded"
              value={marks}
              onChange={(e) => setMarks(e.target.value)}
              placeholder={`Out of ${assignment.assignmentDetails?.marks}`}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-1">Feedback</label>
            <textarea
              className="w-full border p-2 rounded"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Provide detailed feedback..."
              rows={3}
            ></textarea>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-sm bg-gray-300 text-black"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-sm btn-primary">
              Submit Evaluation
            </button>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Evalute;