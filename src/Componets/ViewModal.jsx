import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { RxCross2 } from "react-icons/rx";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';
const ViewModal = ({ assignmentId, closeModal }) => {

      const [docLink, setDocLink] = useState("");
  const [note, setNote] = useState("");
const {user} = use(AuthContext);

const navigate = useNavigate();
 const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubmission = {
            assignmentId,
            docLink,
            note,
            email: user?.email,
            submittedAt: new Date()
        };

        try {
            const res = await fetch('http://localhost:3000/submittedAssignments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSubmission),
            });

            const data = await res.json();

           if (data.insertedId) {
    Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Assignment Submitted!',
        
    });
    closeModal();
     navigate('/Myattempt');
} else {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
    });
}

}catch (err) {
    console.error(err);
    Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Failed to submit!',
    });
}

    };
    return (
        <div>
<div className="fixed inset-0  bg-opacity-40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
                <button onClick={closeModal} className="absolute right-4 top-2 text-xl"><RxCross2 /></button>
                <h2 className="text-xl font-bold mb-4">Submit Assignment</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="url"
                        required
                        className="w-full border p-2 rounded"
                        placeholder="https://docs.google.com/..."
                        value={docLink}
                        onChange={(e) => setDocLink(e.target.value)}
                    />
                    <textarea
                        className="w-full border p-2 rounded"
                        placeholder="Add any notes for the reviewer..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                    />
                    <button className="btn btn-primary w-full">Submit Now</button>
                </form>
            </div>
        </div> 
        </div>
    );
};

export default ViewModal;