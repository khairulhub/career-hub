import React from "react";

import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";

import { Link } from "react-router-dom";

const FeaturedJob = ({ job }) => {
  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_responsibility,
    location,
    job_type,
    salary,
    job_description,
    educational_requirements,
    experiences,
  } = job;

  const { phone, email, address } = job.contact_information;

  return (
    <Link to={`/jobs/${id}`}>
      <div className="pt-8 shadow-xl card bg-base-100 ">
        <figure>
          <img className="w-24" src={logo} alt={job_title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
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
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  text-white">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};

export default FeaturedJob;
