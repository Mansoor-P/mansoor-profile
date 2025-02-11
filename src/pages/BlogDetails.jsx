import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import blogs from "../data/blogsData";

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  useEffect(() => {
    if (blog) {
      document.title = `${blog.title} - Blog | VoxPost`;
    } else {
      document.title = "Blog Not Found | VoxPost";
    }
  }, [blog]);

  if (!blog) {
    return (
      <div className="flex flex-col justify-center items-center h-screen px-4">
        <p className="text-center text-gray-500 text-lg">
          Oops! The blog you are looking for was not found.
        </p>
        <Link
          to="/blogs"
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Back to Blogs
        </Link>
      </div>
    );
  }

  // ✅ Function to render different content types, including bold text
  const renderContent = (content) => {
    if (typeof content === "string") {
      return content.split("\n").map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ));
    }

    if (Array.isArray(content)) {
      return content.map((block, index) => {
        switch (block.type) {
          case "text":
            return (
              <p key={index} className="mb-4">
                {block.value
                  .split("**")
                  .map((chunk, i) =>
                    i % 2 === 1 ? <strong key={i}>{chunk}</strong> : chunk
                  )}
              </p>
            );
          case "image":
            return (
              <img
                key={index}
                src={block.url}
                alt={block.alt}
                className="my-4 w-full max-w-lg rounded-lg shadow-md"
              />
            );
          case "link":
            return (
              <a
                key={index}
                href={block.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline block mb-4"
              >
                {block.text}
              </a>
            );
          case "code":
            return (
              <pre
                key={index}
                className="bg-gray-900 text-white p-4 rounded-md my-4 overflow-x-auto"
              >
                <code>{block.value}</code>
              </pre>
            );
          default:
            return null;
        }
      });
    }

    return <p className="text-red-500">Blog content is not available.</p>;
  };

  return (
    <div className="mt-16 max-w-4xl mx-auto px-4">
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

        <div className="prose lg:prose-lg text-gray-700 mt-4">
          {renderContent(blog.content)}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
