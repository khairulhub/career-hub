import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

const AppliedJob = ({ job }) => {
  const {
    id: job_id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    job_responsibility,
    salary,
    job_description,
    educational_requirements,
    experiences,
  } = job;

  const { phone, email, address } = job.contact_information;
  return (
    <div className="hero bg-base-200 w-full p-4  m-0">
      <div className="hero-content flex-col lg:flex-row w-full bg-white py-4 m-0">
        <img src={logo} alt={job_title} className="h-20 w-24" />
        <div className="flex items-center justify-between">
            <div>
            <h1 className="text-5xl font-bold">{job_title}</h1>
            <p className="py-6">{company_name}</p>
            <div className="justify-start card-actions">
              <div className="badge badge-outline">{remote_or_onsite}</div>
              <div className="badge badge-outline">{job_type}</div>
            </div>
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 ">
                <IoLocationOutline />
                {location}
              </p>
              <p className="flex items-center gap-2 ">
                <CiDollar />
                {salary}
              </p>
            </div>
            </div>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AppliedJob;
