import React from 'react';
import { NavLink } from 'react-router-dom';

const Errorpage = () => {
    return (
        <div
        className="min-h-screen hero"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="text-center hero-content text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Opps!!!</h1>
            <p className="mb-5">
              The Page is not Found
            </p>
            <NavLink to="/" className="btn btn-primary">Go Back</NavLink>
          </div>
        </div>
      </div>
    );
};

export default Errorpage;