import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-2 items-center p-6 bg-[#0f0f0f] text-slate-200 font-extralight ">
      <h3 className="">Adebayo Olayinka </h3>
      <p>2023 &copy; All Rights Reserved</p>
      <div className="flex flex-col items-center">
        <p>Social media</p>
        <div className="flex gap-2">
          <Link to="">
            <FaGithub />
          </Link>
          <Link to="">
            <FaTwitter />
          </Link>
          <Link to="">
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
