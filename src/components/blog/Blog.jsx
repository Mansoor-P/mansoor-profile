import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import blogs from "../../data/blogsData";

const Blog = () => {
  return (
    <div className="mt-20 max-w-6xl mx-auto px-4 md:px-8 lg:px-12">
      {/* Page Heading */}
      <motion.h1
        className="text-left text-3xl md:text-4xl font-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        All Blogs
      </motion.h1>

      <div className="mt-4 border-t border-gray-300"></div>

      {/* Featured Blog - Highlighting the First Blog */}
      {blogs.length > 0 && (
        <motion.div
          className="mt-6 mb-10 rounded-lg overflow-hidden shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-32 sm:py-40 md:py-48 text-center">
            <h1 className="text-3xl md:text-5xl font-bold">{blogs[0].title}</h1>
          </div>
          <div className="p-4 sm:p-6 bg-white">
            <p className="text-gray-600 text-sm sm:text-base">
              {blogs[0].summary}
            </p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={blogs[0].authorImg}
                alt={blogs[0].author}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
              />
              <span className="text-sm text-gray-500">
                {blogs[0].author} • {blogs[0].date}
              </span>
            </div>
            <Link
              to={`/blogs/${blogs[0].slug}`}
              className="text-blue-500 mt-4 block font-semibold hover:underline hover:text-blue-700 transition-all duration-300"
            >
              Read More →
            </Link>
          </div>
        </motion.div>
      )}

      {/* Blog Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.slice(1).map((blog) => (
          <motion.div
            key={blog.id}
            className="rounded-lg overflow-hidden shadow-lg transition-all"
            whileHover={{
              scale: 1.03,
              boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.15)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12 text-center">
              <h2 className="text-xl md:text-2xl font-bold">{blog.title}</h2>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600 text-sm sm:text-base">
                {blog.summary}
              </p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src={blog.authorImg}
                  alt={blog.author}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                />
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
        ))}
      </div>
    </div>
  );
};

export default Blog;
