import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="mt-10 border-t-1 border-gray-400 text-center text-gray-500 p-6">
      <div className="flex justify-center space-x-6 text-2xl">
        <motion.a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#333" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-500 hover:text-gray-800 transition-all"
          aria-label="GitHub Profile"
        >
          <FaGithub />
        </motion.a>

        <motion.a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, color: "#0077B5" }}
          transition={{ type: "spring", stiffness: 300 }}
          className="text-gray-500 hover:text-blue-600 transition-all"
          aria-label="LinkedIn Profile"
        >
          <FaLinkedin />
        </motion.a>
      </div>

      <p className="mt-3 text-sm font-medium">
        © {new Date().getFullYear()} Mansoor Pathikonda • Mansoor Blog{" "}
        <span className="animate-pulse">❣️</span>
      </p>
    </footer>
  );
};

export default Footer;
