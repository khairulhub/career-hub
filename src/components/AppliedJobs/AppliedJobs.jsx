import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

import { getAllApplyData } from "../../Utilities/useDb";

import AppliedJob from "./AppliedJob";

const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [sort , setSort] = useState('');

  
  const allJobs = useLoaderData();

  useEffect(() => {
    const AllApplyData = getAllApplyData();
    const AllApplyDataInt = AllApplyData.map((id) => parseInt(id));
    const AllApplication = allJobs.filter((job) =>
      AllApplyDataInt.includes(job.id)
    );
    setJobs(AllApplication);
    console.log(AllApplyData, allJobs);
  }, []);

  const handelsort = sorttype =>{
    setSort(sorttype);

    if(sort === 'Salary'){
      setJobs([...jobs].sort((a,b)=> b.salary - a.salary));
      
    }else if(sort === 'Job Type'){
        setJobs([...jobs].sort((a,b)=> a.job_type.localeCompare(b.job_type)));
        }
  }

  return (
    <div className="container mx-auto mt-5 w-full">
      <h1 className="text-5xl font-bold text-center">Applied Jobs</h1>
      <div className="dropdown dropdown-top">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort By: ${sort}` : 'Select Sort'}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li onClick={()=>handelsort('Salary')}>
            <a>Salary</a>
          </li>
          <li onClick={()=>handelsort('Job Type')}>
            <a>Job type</a>
          </li>
        </ul>
      </div>
      {jobs.map((job) => (
        <AppliedJob key={job.id} job={job} />
      ))}
    </div>
  );
};

export default AppliedJobs;
