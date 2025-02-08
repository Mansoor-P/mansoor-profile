import React from "react";
import { FaFileDownload } from "react-icons/fa"; // Import FontAwesome icon

const Resume = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <button
        className="text-3xl flex items-center gap-2 border border-black rounded-xl p-3 
        backdrop-blur-md bg-white/30 transition-transform duration-300 hover:scale-110"
      >
        Resume <FaFileDownload />
      </button>
    </div>
  );
};

export default Resume;
