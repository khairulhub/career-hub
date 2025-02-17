import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#1A1919] text-white">
    <footer className="gap-5 p-10 text-white sm:grid-cols-2 md:grid-cols-5 footer md:grid">
    <aside>
    <h1 className="footer-title">CareerHub</h1>
    <p className="text-justify footer-text">
    There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.
    </p>
    <div className="flex items-center space-x-3">
    <FaFacebook  className=" text-[#ffffff] text-2xl "/>
    <FaXTwitter  className="text-2xl"/>
    <FaInstagram  className="text-2xl"/>
    </div>
    </aside>
      
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About Us</a>
        <a className="link link-hover">Work</a>
        <a className="link link-hover">Latest News</a>
        <a className="link link-hover">Careers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Product</h6>
        <a className="link link-hover">Prototype</a>
        <a className="link link-hover">Plans & Pricing</a>
        <a className="link link-hover">Customers</a>
        <a className="link link-hover">Integrations</a>
      </nav>
      <nav>
        <h6 className="footer-title">Support</h6>
        <a className="link link-hover">Help Desk</a>
        <a className="link link-hover">Sales</a>
        <a className="link link-hover">Become a Partner</a>
        <a className="link link-hover">Developers</a>
      </nav>
      <nav>
        <h6 className="footer-title">Contact</h6>
        <a className="link link-hover">524 Broadway , NYC</a>
        <a className="link link-hover">+1 777 - 978 - 5570</a>
        
      </nav>





      
    </footer>
    <div className="px-10 divider divider-info"></div>

      <div className="items-center justify-between px-10 py-4 footer d-flex">
        <p className="">
          &copy; 2021 CareerHub. All rights reserved.
        </p>

        <p>Powered by CareerHub</p>
      </div>
    </div>
  );
};

export default Footer;
