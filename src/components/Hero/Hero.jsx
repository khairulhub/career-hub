import React from "react";
import userimage from '../../assets/images/user.png'

const Hero = () => {
  return (
    <div className="min-h-screen hero bg-base-200">
      <div className="flex-col hero-content lg:flex-row-reverse">
        <img
          src={userimage}
          className="rounded-lg image-full "
        />
        <div>
          <h1 className="text-5xl font-bold">One Step Closer To Your <span className="bg-gradient-to-r from-[#7E90FE] to-[#9873FF] bg-clip-text text-transparent">
          Dream Job
        </span></h1>
          <p className="py-6">
          Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
          </p>
          <button className="btn bg-gradient-to-r from-[#7E90FE] to-[#9873FF]  text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
