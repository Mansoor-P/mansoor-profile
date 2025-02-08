import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
 
const Footer = () => {
  return (
    <div className="mt-10 text-center text-gray-500">
      <div className="flex justify-center space-x-4 text-xl">
        <FaGithub />
        <FaLinkedin />
      </div>
      <p className="mt-2">Mansoor Pathikonda • © 2025 • Mansoor Blog</p>
    </div>
  );
};

export default Footer;
