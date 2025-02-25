import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  return (
    <div className="flex gap-4 justify-center mt-6">
      {/* LinkedIn */}
      <motion.a
        href="https://www.linkedin.com/in/mansoor-pathikonda" // Update with your LinkedIn URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 text-3xl"
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaLinkedin />
      </motion.a>

      {/* GitHub */}
      <motion.a
        href="https://github.com/mansoor-pathikonda" // Update with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-800 text-3xl"
        whileHover={{ scale: 1.2, rotate: -10 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaGithub />
      </motion.a>
    </div>
  );
};

export default SocialLinks;
