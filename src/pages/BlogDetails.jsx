import { useParams, Link } from "react-router-dom";
import blogs from "../data/blogsData"; // ✅ Ensure correct import
import Footer from "../components/Footer";
const BlogDetails = () => {
  const { slug } = useParams();

  // Find the blog based on slug
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <p className="text-center text-gray-500">Blog not found.</p>;
  }

  return (
    <div className="mt-20  max-w-4xl mx-auto">
      <div className="p-4">
        <Link
          to="/blogs"
          className="no-underline text-blue-500 hover: flex items-center"
        >
          <span className="text-lg">←</span>{" "}
          <span className="ml-2">Back to Blogs</span>
        </Link>
      </div>

      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-16 text-center">
        <h1 className="text-3xl font-bold">{blog.title}</h1>
      </div>

      <div className="p-6">
        <p className="text-gray-800 font-semibold">Author: {blog.author}</p>
        <p className="text-gray-500 text-sm">{blog.date}</p>

        <div className="text-gray-600 leading-relaxed mt-4">
          <p>{blog.content}</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetails;
