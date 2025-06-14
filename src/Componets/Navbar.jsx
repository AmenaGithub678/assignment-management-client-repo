import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link, NavLink } from 'react-router';
import logo from'../assets/logo.png';
 import userIcon from "../assets/user.png";
const Navbar = () => {

const {user,logOut} = useContext(AuthContext);  
 const handleLogOut =() =>{
      console.log("user trying to logOut");
      logOut()
      .then(() => {
alert('successfully logOut')
}).catch((error) => {
  console.log(error);
});
    }

    return (
<div className='w-full mx-auto'>
      <div className="navbar bg-base-100 shadow-sm mt-8">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#FFC2BA] rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Home</NavLink></li>
              <li><NavLink to="/assignments" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>My Assignment</NavLink></li>

              {user && (
                <>
                  <li><NavLink to="/pendingAssignment" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Pending Assignment</NavLink></li>
                  <li><NavLink to="/createassignment" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Create Assignment</NavLink></li>
                  <li><NavLink to="/Myattempt" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>My Attempt</NavLink></li>
                </>
              )}

              {!user && (
                <>
                  <li><NavLink to="/auth/login" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Login</NavLink></li>
                  <li><NavLink to="/auth/register" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Register</NavLink></li>
                </>
              )}
            </ul>
          </div>

          {/* Logo Section */}
          <Link to="/" className="text-xl text-[#0F0F0FCC] font-bold flex items-center gap-1">
            <img src={logo} className="w-[40px] h-[40px] rounded object-contain" />
            <h1 className="text-lg font-bold text-[#AD56C4]">
              Assign<span className="font-bold text-[#8866DE]">Mates</span>
            </h1>
          </Link>
        </div>

        {/* Navbar Center (Desktop Menu) */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Home</NavLink></li>
            <li><NavLink to="/assignments" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>My Assignment</NavLink></li>

            {user && (
              <>
                <li><NavLink to="/pendingAssignment" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Pending Assignment</NavLink></li>
                <li><NavLink to="/createassignment" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>Create Assignment</NavLink></li>
                <li><NavLink to="/Myattempt" className={({ isActive }) => isActive ? "text-[#AD56C4] font-bold" : "text-[#f000b8] font-semibold"}>My Attempt</NavLink></li>
              </>
            )}
          </ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {!user ? (
            <div className="hidden lg:flex gap-4 items-center">
              <Link to="/auth/login"><button className="btn btn-outline btn-secondary">Login</button></Link>
              <Link to="/auth/register"><button className="btn btn-outline btn-secondary">Register</button></Link>
            </div>
          ) : (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={user?.displayName || user?.email}>
                <div className="w-10 rounded-full">
                  <img alt="User profile" src={user?.photoURL || userIcon} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
                <li><span className="font-bold">{user?.displayName || user?.email}</span></li>
                <li><button onClick={handleLogOut}>Logout</button></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
   
};

export default Navbar;