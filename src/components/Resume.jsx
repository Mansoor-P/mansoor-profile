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
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="rounded-full shadow-lg"
      >
        <Link
          to="/resume"
          aria-label="View Resume"
          className="
            text-lg md:text-2xl font-semibold text-white 
            flex items-center gap-3 px-6 py-3 rounded-full
            bg-gradient-to-r from-purple-500 to-indigo-600
            shadow-lg backdrop-blur-md transition-all duration-300 ease-in-out
            hover:shadow-xl hover:from-indigo-600 hover:to-purple-500
          "
        >
          <RiPagesLine className="text-2xl md:text-3xl animate-pulse" />
          View Resume
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default Resume;
