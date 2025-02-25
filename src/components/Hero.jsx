import Resume from "./Resume";
import { motion } from "framer-motion";
import mansoorImage from "../assets/mansoor.jpg";

const Hero = () => {
  return (
    <div className="mt-20 flex flex-col items-center text-center px-4">
      {/* Profile Image */}
      <motion.img
        src={mansoorImage}
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      />

      {/* Profile Description */}
      <motion.div
        className="text-xl font-normal p-4 text-gray-900 dark:text-white max-w-full space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Hi, I am{" "}
          <span className="text-indigo-500 font-semibold">
            Mansoor Pathikonda
          </span>
          , a{" "}
          <span className="text-blue-500 font-semibold">
            Aspiring Software Engineer
          </span>{" "}
          specializing in{" "}
          <span className="bg-green-100 dark:bg-green-800 text-green-600 dark:text-green-300 px-2 rounded">
            Backend Development.
          </span>
        </p>
        <p>
          I have expertise in{" "}
          <span className="bg-pink-200 dark:bg-pink-800 text-pink-600 dark:text-pink-300 px-2 rounded">
            Java, Spring Boot, Microservices, REST APIs, and Databases.
          </span>
        </p>
        <p>
          Strong foundation in{" "}
          <span className="bg-blue-200 dark:bg-blue-800 text-blue-600 dark:text-blue-300 px-2 rounded">
            Problem-Solving and Competitive Programming
          </span>
          .
        </p>
      </motion.div>

      {/* Resume Button */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Resume />
      </motion.div>
    </div>
  );
};

export default Hero;
