import PropTypes from "prop-types";
import { motion } from "framer-motion";

const tagColors = [
  "bg-blue-200 text-blue-800",
  "bg-green-200 text-green-800",
  "bg-yellow-200 text-yellow-800",
  "bg-red-200 text-red-800",
  "bg-purple-200 text-purple-800",
];

const ProjectCard = ({
  name,
  description,
  link,
  image,
  techStack,
  category,
  tags,
}) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
  >
    <img src={image} alt={name} className="w-full h-56 object-cover" />
    <div className="p-5">
      <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <p className="text-sm text-gray-700 mt-1">
        <strong>Tech Stack:</strong> {techStack.join(", ")}
      </p>
      <p className="text-sm font-semibold text-gray-700">
        <strong>Category:</strong>{" "}
        <span className="text-blue-500">{category}</span>
      </p>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-xs font-semibold ${
              tagColors[index % tagColors.length]
            }`}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      <motion.a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05, color: "#3B82F6" }}
        className="text-blue-500 font-semibold mt-4 inline-block"
      >
        GitHub Demo →
      </motion.a>
    </div>
  </motion.div>
);

ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  techStack: PropTypes.array.isRequired,
  category: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
};

export default ProjectCard;
