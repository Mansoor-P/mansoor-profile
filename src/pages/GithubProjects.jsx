import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/projects")
      .then((res) => res.json())
      .then((data) => {
        setProjects(Array.isArray(data) ? data : []); // Ensure it's an array
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch Error:", err);
        setProjects([]); // Prevent undefined issues
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-24 min-h-screen px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        GitHub Projects
      </h1>

      {loading ? (
        <p className="text-center text-gray-500 text-lg">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <ProjectCard key={project._id} {...project} />
            ))
          ) : (
            <p className="text-center text-gray-500 text-lg">
              No projects available.
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default GithubProjects;
