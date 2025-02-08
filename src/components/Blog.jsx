import { Link } from "react-router-dom";
import blogs from "../data/blogsData"; // Ensure correct import
import Footer from "./Footer";

const Blog = () => {
  return (
    <div className="mt-20 max-w-5xl mx-auto p-6">
      <h1 className=" text-left text-4xl font-bold">All Blogs</h1>
      <div className="mt-4 border-t border-gray-300"></div>

      {/* Featured Blog (First Blog) */}
      {blogs.length > 0 && (
        <div className="mt-4 mb-8 rounded-lg overflow-hidden shadow-lg">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-48 text-center">
            <h1 className="text-5xl font-bold">{blogs[0].title}</h1>
          </div>
          <div className="p-6 bg-white">
            <p className="text-gray-600">{blogs[0].summary}</p>
            <div className="flex items-center gap-2 mt-4">
              <img
                src={blogs[0].authorImg}
                alt="Author"
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-gray-500">
                {blogs[0].author} • {blogs[0].date}
              </span>
            </div>
            <Link
              to={`/blogs/${blogs[0].slug}`}
              className="text-blue-500 mt-4 block font-semibold"
            >
              Read More →
            </Link>
          </div>
        </div>
      )}

      {/* Other Blogs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {blogs.slice(1).map((blog) => (
          <div key={blog.id} className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white py-12 text-center">
              <h2 className="text-4xl font-bold">{blog.title}</h2>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">{blog.summary}</p>
              <div className="flex items-center gap-2 mt-3">
                <img
                  src={blog.authorImg}
                  alt="Author"
                  className="w-8 h-8 rounded-full"
                />
                <span className="text-sm text-gray-500">
                  {blog.author} • {blog.date}
                </span>
              </div>
              <Link
                to={`/blogs/${blog.slug}`}
                className="text-blue-500 mt-3 block font-semibold"
              >
                Read More →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Blog;
