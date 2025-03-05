import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import blogs from "../data/blogsData";

// Blog Component
const Blog = () => {
  return (
    <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-12">
      <motion.h1
        className="text-center sm:text-left text-4xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Blogs
      </motion.h1>

      <div className="mt-4 mb-4 border-t border-gray-300"></div>

      {/* Featured Blog */}
      {blogs.length > 0 && <BlogCard blog={blogs[0]} isFeatured />}

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {blogs.slice(1).map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

// BlogCard Component
const BlogCard = ({ blog, isFeatured }) => {
  return (
    <motion.div
      className={`rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ${
        isFeatured ? "mb-12" : ""
      }`}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Blog Header */}
      <div
        className={`text-white text-center px-4 ${
          isFeatured ? "py-32 sm:py-48" : "py-16"
        } ${
          isFeatured
            ? "bg-gradient-to-r from-blue-500 to-purple-600"
            : "bg-gradient-to-r from-pink-500 to-purple-500"
        }`}
      >
        <h2
          className={`font-bold ${
            isFeatured ? "text-3xl md:text-5xl" : "text-xl md:text-2xl"
          }`}
        >
          {blog.title}
        </h2>
      </div>

      {/* Blog Content */}
      <div className="p-5 sm:p-6 bg-white">
        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
          {blog.summary}
        </p>

        {/* Author Section */}
        <div className="flex items-center gap-3 mt-4">
          {blog.authorImg && (
            <img
              src={blog.authorImg}
              alt={blog.author}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-300"
            />
          )}
          <span className="text-sm text-gray-500">
            {blog.author} • {blog.date}
          </span>
        </div>

        {/* Read More Link */}
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-blue-500 font-semibold mt-4 block hover:underline hover:text-blue-700 transition-all duration-300"
        >
          Read More →
        </Link>
      </div>
    </motion.div>
  );
};

// PropTypes Validation
BlogCard.propTypes = {
  blog: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authorImg: PropTypes.string,
    date: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  }).isRequired,
  isFeatured: PropTypes.bool,
};

export default Blog;
