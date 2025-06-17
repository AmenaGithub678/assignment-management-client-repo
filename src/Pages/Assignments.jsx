import React, {  useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import AssignmentCard from '../Componets/AssignmentCard';
import { FcEmptyFilter } from "react-icons/fc";
const Assignments = () => {
  // const { user } = use(AuthContext);
 const [assignments, setAssignments] = useState([]);

 const [search, setSearch] = useState('');
const [difficulty, setDifficulty] = useState('');


useEffect(() => {
  let url = 'http://localhost:3000/assignments';

  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (difficulty) params.append('difficulty', difficulty);

  if (params.toString()) {
    url += `?${params.toString()}`;
  }

  fetch(url)
    .then((res) => res.json())
    .then((data) => setAssignments(data));
}, [search, difficulty]);


  const handleDelete = (id) => {
    console.log('Delete assignment with ID:', id);
    
  };

  const handleUpdate = (assignment) => {
    console.log('Update assignment:', assignment);
  
  };

    return (
<div className="px-4 py-6 max-w-6xl mx-auto">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-6 flex-wrap gap-4 ">
        {/* Dashboard Label */}
        <div className="text-xl 
        font-semibold 
        text-purple-700 flex 
        items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Dashboard
        </div>

        {/* Right: Search + Filter */}
        <div className="flex items-center gap-4 ml-auto">
          {/* Search Input */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search assignments..."
              className="input input-bordered w-40 lg:w-64 lg:pr-10 pr-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <svg
              className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </div>

          {/* Difficulty Filter */}
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-outline flex items-center gap-2"
            >
              {difficulty ? difficulty.charAt(0).toUpperCase() + difficulty.slice(1) : 'All Levels'}
              <FcEmptyFilter className="text-lg" />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 w-40 rounded-box p-2 shadow"
            >
              <li><a onClick={() => setDifficulty('')}>All</a></li>
              <li><a onClick={() => setDifficulty('easy')}>Easy</a></li>
              <li><a onClick={() => setDifficulty('medium')}>Medium</a></li>
              <li><a onClick={() => setDifficulty('hard')}>Hard</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Assignment List */}
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