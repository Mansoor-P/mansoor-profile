import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaHandPointer } from "react-icons/fa"; // Import Hand Pointer Icon

const Resume = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full shadow-lg cursor-pointer"
    >
      <Link
        to="/resume"
        aria-label="View Resume"
        className="
            text-sm md:text-lg font-semibold text-white 
            flex items-center gap-2 px-4 py-2 rounded-full
            bg-gradient-to-r from-purple-500 to-indigo-600
            shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out
            hover:shadow-xl hover:from-indigo-600 hover:to-purple-500
          "
      >
        View Resume
        <motion.div
          animate={{ x: [0, 5, 0] }} // Small horizontal movement
          transition={{ repeat: Infinity, duration: 1 }}
        >
          <FaHandPointer className="text-lg md:text-xl text-yellow-300" />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default Resume;
