import React from "react";

import { CiDollar } from "react-icons/ci";
import { FaCalendarAlt , FaPhoneAlt} from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

import { Link, useLoaderData, useParams } from "react-router-dom";

import { storeApplyData } from "../../Utilities/useDb";

const JobDetails = () => {
  const { id } = useParams();
  const jobId = parseInt(id);

  const jobs = useLoaderData() || [];

  const job = jobs.find((job) => job.id === jobId);

  console.log("====================================");
  console.log(jobId, jobs, job);
  console.log("====================================");

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


  const handelApplyNow = (id) => {
  
    storeApplyData(id);
    alert("You have successfully applied for this job");
    
  }


  return (
    <div className="bg-base-200">
      <h1 className="text-3xl text-center">Job Details</h1>
      <p>{id}</p>
      <div className="hero bg-base-200">
        <div>
          <div className="flex-col hero-content lg:flex-row">
            <img src={logo} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">{job_title}</h1>
              <p className="py-6">{company_name}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-5">
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <div className="md:w-4/5 sm:w-full p-6 bg-[#E8E8E8]">
            <p className="pt-3 text-justify">
              <b>Job Description:</b> {job_description}{" "}
            </p>
            <p className="pt-3 text-justify">
              <b>Job Responsibility:</b> {job_responsibility}{" "}
            </p>
            <p className="pt-3 text-justify">
              <b>Educational Requirements:</b>
              <br></br> {educational_requirements}
            </p>
            <p className="pt-3 text-justify">
              <b>Experiences:</b>
              <br></br> {experiences}
            </p>
          </div>
          <div className="sm:w-full md:w-2/5 p-6 bg-[#E8E8E8]">
            <h3 className="font-bold">Job Details</h3>
            <div className="divider"></div>
            <p className="flex items-center gap-1"><CiDollar /> <span className="font-semibold">Salary :</span>{salary} (per month)</p>
           
            <p className="flex items-center gap-1"><FaCalendarAlt /> <span className="font-semibold">Job Title : </span>{job_title} </p>
            <h3 className="mt-4 font-bold">Contact Information</h3>
            <div className="divider"></div>
            <p className="flex items-center gap-1"><FaPhoneAlt /> <span className="font-semibold">Phone: </span>{phone} </p>
            <p className="flex items-center gap-1"><MdOutlineMail />  <span className="font-semibold">Email : </span>{email} </p>
            <p className="flex items-center gap-1"><CiLocationOn />  <span className="font-semibold">Location : </span>{location} </p>

            <button onClick={()=> handelApplyNow(id)} className="w-full mt-4 btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  text-white">Apply Now</button>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
