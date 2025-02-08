import React from "react";
import { motion } from "framer-motion";
import mansoorImage from "../assets/mansoor.jpg";
import Resume from "./Resume";

const Profile = () => {
  return (
    <div className="mt-12 flex flex-col items-center ">
      {/* Profile Image with Hover Effect */}
      <motion.img
        src={mansoorImage}
        alt="Profile"
        className="w-40 h-40 object-cover rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.1, rotate: 5 }}
      />

      {/* Profile Description */}
      <motion.p
        className="text-xl text-center font-normal p-4 text-gray-800"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      >
        <p className="text-xl font-normal text-gray-900">
          Hi, I am <span className="text-indigo-500">Mansoor Pathikonda</span>,
          a <span className="text-blue-400">Aspiring Software Engineer</span>{" "}
          specializing in{" "}
          <span className="bg-green-100 text-green-600 px-2 rounded">
            Backend Development.
          </span>{" "}
        </p>
        <p className="text-gray-800">
          I have expertise in{" "}
          <span className="bg-pink-200 text-pink-600 px-2 rounded">
            Java, Spring Boot , Micro Service, REST APIs , and Databases .
          </span>
        </p>
        <p className="text-gray-800">
          Strong foundation in{" "}
          <span className="bg-blue-200 text-blue-600 px-2 rounded">
            Problem-Solving , and Competitive Programming
          </span>
          .
        </p>
      </motion.p>

      {/* Conditional Rendering with Animation */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
        className="w-full"
      >
        <Resume />
      </motion.div>
    </div>
  );
};

export default Profile;
