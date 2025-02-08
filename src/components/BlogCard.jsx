import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold">{blog.title}</h2>
      <p className="text-gray-600">{blog.summary}</p>
      <Link to={`/blogs/${blog.slug}`} className="text-blue-600 font-semibold mt-2 inline-block">
        Read More →
      </Link>
    </div>
  );
};

export default BlogCard;
