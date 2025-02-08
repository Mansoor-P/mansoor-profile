import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./components/Blog";
import GithubProjects from "./pages/GithubProjects";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import BlogDetails from "./pages/BlogDetails";
import ResumeComponent from "./components/Resume/ResumeComponent";
import Footer from "./components/Footer";

import { FaArrowUp } from "react-icons/fa";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section
      className="p-6 min-h-screen bg-gradient-to-tr from-purple-80 via-blue-100 to-green-80 
                h-full w-full rounded-b-lg"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path="/blogs/:slug" element={<BlogDetails />} />
        <Route path="/github-projects" element={<GithubProjects />} />

        <Route path="/resume" element={<ResumeComponent />} />
      </Routes>
      <div
        className="fixed bottom-4 right-4 border text-purple-600 rounded-full p-3 
                 animate-bounce cursor-pointer hover:bg-purple-50 shadow-lg"
        onClick={scrollToTop}
      >
        <span className="text-2xl">
          <FaArrowUp />
        </span>
      </div>

      <Footer />
    </section>
  );
}

export default App;
