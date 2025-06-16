import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from '../Context/AuthContext';

const getValidDate = (dateStr) => {
  const parsed = new Date(dateStr);
  return isNaN(parsed.getTime()) ? new Date() : parsed;
};
const UpdateAssignment = () => {

    const {_id,title,description,marks,thumbnail,difficulty,dueDate, userName,email} = useLoaderData();

    const {user} = use(AuthContext);
 const [updatedDate, setUpdatedDate] = useState(() => getValidDate(dueDate));

    const  handleUpdateTask = e =>{
             e.preventDefault();
             const form = e.target;
            const formData = new FormData(form);
             const updatedAssignment = {
      ...Object.fromEntries(formData.entries()),
      dueDate: updatedDate.toISOString().split("T")[0],
    };
    
            // send updated task to the database
           fetch(`http://localhost:3000/createAssignment/${_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedAssignment),
    })
      .then(res => res.json())
    .then(data => {
      if (data.modifiedCount) {
        Swal.fire({
          icon: "success",
          position: "top-end",
          title: "Assignment updated successfully.",
          showConfirmButton: false,
          timer: 1500
        });
      } else {
        Swal.fire({
          icon: "info",
          title: "No changes made.",
          showConfirmButton: false,
          timer: 1500
        });
      }
    })
    
        }

    return (
<div className='p-8 lg:p-24 bg-[#FFB8Dc]'>
<div className='lg:p-12 text-center lg:space-y-4'>
        <h1 className="text-xl lg:text-6xl text-[#AD56C4]">Update Assignment</h1>
        <p className='text-[#FD3DB5] font-semibold mb-2'>
          Edit the assignment information. You can change the title, description, thumbnail, marks, difficulty, and due date. User details will remain read-only.
        </p>
</div>

      <form onSubmit={handleUpdateTask}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Assignment Title</label>
            <input
              type="text"
              name="title"
              defaultValue={title}
              className="input w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Total Marks</label>
            <input
              type="number"
              name="marks"
              defaultValue={marks}
              className="input w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 col-span-1 md:col-span-2">
            <label className="label">Description</label>
            <textarea
              name="description"
              defaultValue={description}
              className="textarea w-full"
              rows="4"
              minLength={20}
              required
            ></textarea>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Thumbnail Image URL</label>
            <input
              type="text"
              name="thumbnail"
              defaultValue={thumbnail}
              className="input w-full"
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Difficulty Level</label>
            <select
              name="difficulty"
              defaultValue={difficulty}
              className="select w-full"
              required
            >
              <option value="">Select Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Due Date</label>
            <DatePicker
              selected={updatedDate}
              onChange={(date) => setUpdatedDate(date)}
              className="input w-full"
              dateFormat="yyyy-MM-dd"
              minDate={new Date()}
              required
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Name</label>
            <input
              type="text"
              name="userName"
              value={user?.displayName}
              className="input w-full"
              readOnly
            />
          </fieldset>

          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">User Email</label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input w-full"
              readOnly
            />
          </fieldset>
        </div>

        <input
          type="submit"
          className='btn w-full mt-6'
          value="Update Assignment"
        />
      </form>
    </div>
    );
};

export default UpdateAssignment;