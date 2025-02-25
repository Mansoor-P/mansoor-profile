import PropTypes from "prop-types";
import { motion } from "framer-motion";

const ProjectCard = ({ name, description, link, image }) => {
  return (
    <div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden transition-all duration-300"
    >
      {/* Project Image */}
      <img src={image} alt={name} className="w-full h-56 object-cover" />

      {/* Project Details */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Link with Hover Animation */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, color: "#3B82F6" }} // Scale effect & blue text on hover
          transition={{ duration: 0.3 }}
          className="text-blue-500 font-semibold mt-3 inline-block"
          aria-label={`Learn more about ${name}`}
        >
          Learn more →
        </motion.a>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProjectCard;
