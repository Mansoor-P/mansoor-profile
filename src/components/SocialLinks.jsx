import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center mt-4">
      <a
        href="https://github.com/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-black text-2xl transition-transform transform hover:scale-110"
      >
        <FaGithub className="text-4xl" />
      </a>
      <a
        href="https://linkedin.com/in/yourusername"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-blue-600 text-2xl transition-transform transform hover:scale-110"
      >
        <FaLinkedin className="text-4xl" />
      </a>
    </div>
  );
};

export default SocialLinks;
