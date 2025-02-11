import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const socialLinks = [
  {
    href: "https://github.com/Mansoor-P",
    icon: <FaGithub />,
    label: "GitHub",
    hoverColor: "hover:text-black",
  },
  {
    href: "https://linkedin.com/in/mansoor0731",
    icon: <FaLinkedin />,
    label: "LinkedIn",
    hoverColor: "hover:text-blue-600",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex gap-4 md:gap-6 justify-center mt-6">
      {socialLinks.map(({ href, icon, label, hoverColor }, index) => (
        <motion.a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`text-gray-600 ${hoverColor} text-3xl md:text-4xl transition-transform transform hover:scale-110  duration-300`}
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 300 }}
          aria-label={label}
        >
          <span>{icon}</span>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks;
