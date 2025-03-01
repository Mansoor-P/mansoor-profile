import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects"; // Importing static projects

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects(projectsData);
      setLoading(false);
    }, 1000);
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
            projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
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
