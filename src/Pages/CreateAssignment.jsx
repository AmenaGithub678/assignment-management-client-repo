import React, { use, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from 'sweetalert2';
const CreateAssignment = () => {
const {user} = use(AuthContext);

console.log('want to show the token', user.
accessToken);
const [dueDate, setDueDate] = useState(null);

const handleCreateAssignment = e => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
const description = formData.get("description");
  const marks = formData.get("marks");

  // Validate description length
  if (description.length < 20) {
    return Swal.fire({
      icon: 'error',
      title: 'Oops!',
      text: 'Description must be at least 20 characters.',
    });
  }

  //Validate number
  if (isNaN(marks) || Number(marks) <= 0) {
    return Swal.fire({
      icon: 'error',
      title: 'Invalid Marks',
      text: 'Marks should be a positive number.',
    });
  }

    const newAssignment = {
      ...Object.fromEntries(formData.entries()),
      dueDate: dueDate?.toISOString().split('T')[0], // format: year-month-date
    };

    console.log("new assignment", newAssignment);

// POST to server
fetch('http://localhost:3000/createAssignment', {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${user.accessToken}` 
  },
  body: JSON.stringify(newAssignment)
})

      .then(res => res.json())
      .then(data => {
        console.log("Server response:", data);
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: "Assignment Created!",
            icon: "success",
            confirmButtonColor: "#AD56C4"
          });
          form.reset();
          setDueDate(null);
        }
      })
      .catch(err => {
        console.error("Error:", err);
        Swal.fire({
          title: "Error",
          text: "Something went wrong!",
          icon: "error"
        });
      });
    }
    return (
<div className='p-8 lg:p-24 bg-[#FFB8Dc]'>
<div className='lg:p-12 text-center lg:space-y-4'>
<h1 className="text-xl lg:text-6xl text-[#AD56C4]">Create Assignment</h1>
<p className='text-[#FD3DB5] font-semibold mb-2'>
      Use this form to create a new assignment. Provide a clear title, detailed description, difficulty level, total marks, a thumbnail URL, and a submission deadline. This information will help learners understand the task and complete it within the due time.
    </p>
  </div>

  {/* Form Start */}
  <form 
   onSubmit={handleCreateAssignment}
  >
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

      {/* Title */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Assignment Title</label>
        <input
          type="text"
          name="title"
          className="input w-full"
          placeholder="Enter Assignment Title"
          required
        />
      </fieldset>

      {/* Marks */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Total Marks</label>
        <input
          type="number"
          name="marks"
          className="input w-full"
          placeholder="Enter total marks"
          required
        />
      </fieldset>

      {/* Description */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 col-span-1 md:col-span-2">
        <label className="label">Description</label>
        <textarea
          name="description"
          className="textarea w-full"
          rows="4"
          placeholder="Provide a detailed description of the assignment"
           minLength={20}
          required
        ></textarea>
      </fieldset>

      {/* Thumbnail URL */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Thumbnail Image URL</label>
        <input
          type="text"
          name="thumbnail"
          className="input w-full"
          placeholder="https://example.com/image.png"
          required
        />
      </fieldset>

      {/* Difficulty Level */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">Difficulty Level</label>
        <select name="difficulty" className="select w-full" required>
          <option value="">Select Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </fieldset>

      {/* Due Date */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
  <label className="label">Due Date</label>
  <DatePicker
    selected={dueDate}
    onChange={(date) => setDueDate(date)}
    className="input w-full"
    placeholderText="Select due date"
    dateFormat="yyyy-MM-dd"
     minDate={new Date()}
    required
  />
</fieldset>


      {/* User Name (Read Only) */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">User Name</label>
        <input
          type="text"
          name="userName"
          className="input w-full"
          value={user?.displayName}
          readOnly
        />
      </fieldset>

      {/* User Email (Read Only) */}
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
        <label className="label">User Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          value={user?.email}
          readOnly
        />
      </fieldset>
    </div>

    {/* Submit Button */}
    <input
      type="submit"
      className='btn w-full mt-6'
      value="Create Assignment"
    />
  </form>
</div>

    );
};

export default CreateAssignment;