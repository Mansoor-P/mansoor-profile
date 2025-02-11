import PropTypes from "prop-types";

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
      <h3 className="text-lg font-bold text-gray-900">{name}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 font-semibold mt-3 inline-block transition-transform transform hover:scale-105"
        aria-label={`Learn more about ${name}`}
      >
        Learn more →
      </a>
    </div>
  );
};

// Add PropTypes validation
ProjectCard.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default ProjectCard;
