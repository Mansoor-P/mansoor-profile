import React from "react";
import { FaFileDownload } from "react-icons/fa"; // Import FontAwesome icon
import { Link } from "react-router-dom";
const Resume = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <Link to={"/resume"}>
        <a
          className="text-3xl flex items-center gap-2 border border-black rounded-xl p-3 
        backdrop-blur-md bg-white/30 transition-transform duration-300 cursor-pointer hover:scale-110"
        >
          Resume <FaFileDownload />
        </a>
      </Link>
    </div>
  );
};

export default Resume;
