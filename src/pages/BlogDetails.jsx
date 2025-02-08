import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogsData"; // ✅ Ensure correct import

const BlogDetails = () => {
  const { slug } = useParams();

  // Find the blog based on slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <p className="text-center text-gray-500 text-lg">Blog not found.</p>
        <Link
          to="/blogs"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <div className="mt-16 max-w-4xl mx-auto">
      {/* Back Button */}
      <div className="p-4">
        <Link
          to="/blogs"
          className="flex items-center text-blue-500 hover:underline"
        >
          <span className="text-lg">←</span>
          <span className="ml-2">Back to Blogs</span>
        </Link>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center rounded-xl shadow-lg">
        <h1 className="text-4xl font-bold">{blog.title}</h1>
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <p className="text-gray-800 font-semibold text-lg">
          Author: {blog.author}
        </p>
        <p className="text-gray-500 text-sm">{blog.date}</p>

        <div className="text-gray-700 leading-relaxed mt-4 space-y-4">
          {blog.content.split("\n").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
