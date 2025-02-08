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
      <p className="text-gray-600 mb-3">{blog.summary}</p>
      <Link
        to={`/blogs/${blog.slug}`}
        className="text-blue-600 font-semibold hover:underline hover:text-blue-700 transition-all duration-200"
      >
        Read More →
      </Link>
    </motion.div>
  );
};

export default BlogCard;
