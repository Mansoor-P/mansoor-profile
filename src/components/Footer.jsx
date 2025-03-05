import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Mansoor-P",
    icon: <FaGithub />,
    color: "hover:text-gray-800",
  },
  {
    href: "https://linkedin.com/in/mansoor0731",
    icon: <FaLinkedin />,
    color: "hover:text-blue-600",
  },
];

const Footer = () => (
  <footer className="mt-10 border-t border-gray-400 text-center text-gray-500 p-6">
    <div className="flex justify-center space-x-6 text-2xl">
      {socialLinks.map(({ href, icon, color }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          className={`text-gray-500 transition-all ${color}`}
          aria-label={
            href.includes("github") ? "GitHub Profile" : "LinkedIn Profile"
          }
        >
          {icon}
        </motion.a>
      ))}
    </div>
    <p className="mt-3 text-sm font-medium">
      © {new Date().getFullYear()} Mansoor Pathikonda • Mansoor Blog{" "}
      <span className="animate-pulse">❣️</span>
    </p>
  </footer>
);

export default Footer;
