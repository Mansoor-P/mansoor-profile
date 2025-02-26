import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import blogs from "../data/blogsData";

// Blog Component
const Blog = () => {
  return (
    <div className="mt-20 max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      <motion.h1
        className="text-left text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Blogs
      </motion.h1>

      <div className="mt-4 border-t border-gray-300"></div>

      {/* Featured Blog */}
      {blogs.length > 0 && <BlogCard blog={blogs[0]} isFeatured />}

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
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
      className={`mt-4 rounded-lg overflow-hidden shadow-lg ${
        isFeatured ? "mb-10" : ""
      }`}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div
        className={`text-white text-center ${
          isFeatured ? "py-40 sm:py-48" : "py-12"
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
      <div className="p-4 bg-white">
        <p className="text-gray-600 text-sm sm:text-base">{blog.summary}</p>
        <div className="flex items-center gap-2 mt-3">
          {blog.authorImg && (
            <img
              src={blog.authorImg}
              alt={blog.author}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
            />
          )}
          <span className="text-sm text-gray-500">
            {blog.author} • {blog.date}
          </span>
        </div>
        <Link
          to={`/blogs/${blog.slug}`}
          className="text-blue-500 mt-3 block font-semibold hover:underline hover:text-blue-700 transition-all duration-300"
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
