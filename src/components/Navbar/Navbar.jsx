import React from "react";

import { NavLink } from "react-router-dom";

const Navbar = () => {
    const menu = [
        <li key="statistics">
          <NavLink to='/' className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">Statistics</NavLink>
        </li>,
        <li key="applied-jobs">
          <NavLink to='/appliedjobs' className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">Applied Jobs</NavLink>
        </li>,
        <li key="blog">
          <NavLink to='' className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-white font-bold">Blog</NavLink>
        </li>,
        
      ];

      
  return (
    
   
      <div className=" navbar bg-[#F4F4F4] px-10 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              
              {menu}
              
            </ul>
          </div>
          <a className="text-xl  bg-[#F4F4F4] hover:bg-[#F4F4F4] font-semibold">CareerHub</a>
        </div>
        <div className="hidden navbar-center lg:flex">
          <ul className="px-1 menu menu-horizontal">
           {menu}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF] text-[#fff] font-semibold">Start Applying</a>
        </div>
      </div>
   
  );
};

export default Navbar;
