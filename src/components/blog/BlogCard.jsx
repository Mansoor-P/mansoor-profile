import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const BlogCard = ({ blog }) => {
  return (
    <motion.div
      className="bg-white p-6 rounded-lg shadow-md border border-gray-200 transition-all duration-300"
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-xl font-bold text-gray-800 mb-2">{blog.title}</h2>
      {blog.content.map((item, index) => {
        if (item.type === "text") {
          return (
            <p key={index} className="text-gray-600 mb-3">
              {item.value}
            </p>
          );
        }
        if (item.type === "image") {
          return (
            <img
              key={index}
              src={item.url}
              alt={item.alt}
              className="w-full h-auto rounded-md my-3"
            />
          );
        }
        if (item.type === "code") {
          return (
            <pre
              key={index}
              className="bg-gray-100 p-4 rounded-md overflow-x-auto my-3"
            >
              <code className="text-sm text-gray-800">{item.value}</code>
            </pre>
          );
        }
        if (item.type === "link") {
          return (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition-all duration-200 block my-2"
            >
              {item.text}
            </a>
          );
        }
        return null;
      })}
      <Link
        to={`/blogs/${blog.slug}`}
        className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition-all duration-200 block mt-4"
      >
        Read More →
      </Link>
    </motion.div>
  );
};

// Define PropTypes for `blog` prop
BlogCard.propTypes = {
  blog: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(
      PropTypes.shape({
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        url: PropTypes.string,
        alt: PropTypes.string,
        text: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default BlogCard;
