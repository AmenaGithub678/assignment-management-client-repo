import React from 'react';
import { Link } from 'react-router';
import { FcSelfie,FcBullish,FcFullTrash  } from "react-icons/fc";
import Swal from 'sweetalert2';
const AssignmentCard = ({ assignment }) => {
      const { _id, title, marks, difficulty, thumbnail } = assignment;

      const handleDelete =(_id) =>{
            console.log(_id);
      
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
      console.log(result.isConfirmed);
      
       if (result.isConfirmed) {
        
          // start deleting method
          fetch(`https://my-assignmates-server-side.vercel.app/createAssignment/${_id}`,{
          method: "DELETE"
          }).then(res=>res.json())
          .then(data=>{
        //  console.log('after delete',data);
        if(data.deletedCount){
        Swal.fire({
             title: "Deleted!",
             text: "Selected Task has been deleted!",
             icon: "success"
           });
      
        }
          })
        }
      });
      
          }
    return (
 <div className="bg-white rounded-xl shadow-md p-4 flex flex-col md:flex-row gap-4 items-center">
      <img src={thumbnail} alt="Thumbnail" className="w-32 h-20 object-cover rounded" />
      <div className="flex-1">
        <h2 className="text-2xl font-semibold text-[#AD56C4]">{title}</h2>
        <p className="text-gray-600">Marks: {marks}</p>
        <p className="text-sm text-center text-white bg-[#F472B6] px-3 py-1 rounded w-fit mt-1">{difficulty}</p>
      </div>
      <div className="flex flex-col gap-2">
        <Link to={`/assignments/${_id}`}>
          <button className="btn btn-md bg-[#AD56C4] text-white hover:bg-[#7b5c84] text-2xl">View <FcSelfie /></button>
        </Link>
          <Link to={`/updateAssignment/${_id}`}> 
        <button
         
          className="btn btn-md bg-yellow-500 text-white
          text-xl hover:bg-yellow-600 "
        >
          Update <FcBullish />
        </button>
      </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="btn btn-md bg-red-500 text-white text-xl hover:bg-red-600"
        >
          Delete <FcFullTrash />
        </button>
      </div>
    </div>
    );
};

export default AssignmentCard;