import { Link } from "react-router-dom";
import { RiPagesLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      className="flex justify-center items-center mt-4 z-50"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link
        to="/resume"
        className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-purple-500 to-indigo-600 text-white 
        flex items-center gap-3 rounded-full px-6 py-3 shadow-lg 
        backdrop-blur-md transition-all duration-300 ease-in-out 
        hover:scale-105 hover:shadow-xl hover:from-indigo-600 hover:to-purple-500"
      >
        <RiPagesLine className="text-2xl md:text-3xl animate-pulse" />
        View Resume
      </Link>
    </motion.div>
  );
};

export default Resume;
