import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Ensure tagColors is defined inside the file
const tagColors = [
  "bg-blue-200 text-blue-800",
  "bg-green-200 text-green-800",
  "bg-yellow-200 text-yellow-800",
  "bg-red-200 text-red-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
];

const ProjectCard = ({
  name = "Untitled Project",
  description = "No description available.",
  link = "#",
  image = "https://via.placeholder.com/300",
  techStack = [],
  category = "Uncategorized",
  tags = [],
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
    >
      {/* Project Image */}
      <img src={image} alt={name} className="w-full h-56 object-cover" />

      {/* Project Details */}
      <div className="p-5">
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Tech Stack */}
        {techStack?.length > 0 && (
          <p className="mt-2 text-sm font-semibold text-gray-700">
            <span className="text-gray-900">Tech Stack:</span>{" "}
            <span className="text-gray-500">{techStack.join(", ")}</span>
          </p>
        )}

        {/* Category */}
        <p className="text-sm font-semibold text-gray-700 mt-1">
          <span className="text-gray-900">Category:</span>{" "}
          <span className="text-blue-500">{category}</span>
        </p>

        {/* Tags with Colors */}
        <div className="mt-3 flex flex-wrap gap-2">
          {tags?.length > 0 ? (
            tags.map((tag, index) => (
              <span
                key={index}
                className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  tagColors[index % tagColors.length] // Ensure index is within bounds
                }`}
              >
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500 text-xs">No tags available.</span>
          )}
        </div>

        {/* Learn More Button */}
        <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, color: "#3B82F6" }}
          transition={{ duration: 0.3 }}
          className="text-blue-500 font-semibold mt-4 inline-block"
        >
          Git Hub Demo →
        </motion.a>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.string,
  techStack: PropTypes.array,
  category: PropTypes.string,
  tags: PropTypes.array,
};

export default ProjectCard;
