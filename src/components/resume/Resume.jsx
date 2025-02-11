import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";

const Resume = () => {
  return (
    <div className="flex justify-center items-center mt-2">
      <Link
        to="/resume"
        className="text-3xl bg-purple-200 text-purple-700 flex items-center gap-2  rounded-full p-2 px-4 
        backdrop-blur-md cursor-pointer  hover:bg-white border border-purple-500"
      >
        Resume <RiPagesLine />
      </Link>
    </div>
  );
};

export default Resume;
