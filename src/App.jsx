import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import GithubProjects from "./pages/GithubProjects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <section className="p-6 min-h-screen bg-gradient-to-br from-blue-10 via-purple-10 to-pink-50">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/github-projects" element={<GithubProjects />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </section>
  );
}

export default App;
