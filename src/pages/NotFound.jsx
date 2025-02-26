import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-4">
      <motion.h1
        className="text-6xl font-bold text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-xl text-gray-600 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Oops! The page you&apos;re looking for doesn&apos;t exist.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <NavLink
          to="/"
          aria-label="Go back to homepage"
          className="mt-6 px-6 py-3 text-white bg-indigo-600 rounded-md shadow-lg 
                     hover:bg-indigo-700 transition-all duration-300"
        >
          Go Back Home
        </NavLink>
      </motion.div>
    </div>
  );
};

export default NotFound;
