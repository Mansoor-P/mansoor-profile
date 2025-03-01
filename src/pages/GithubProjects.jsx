import { useState, useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import projectsData from "../data/projects";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="mt-24 min-h-screen px-6 max-w-6xl mx-auto">
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        GitHub Projects
      </h1>

      {projects.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">Loading projects...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      )}
    </section>
  );
};

export default GithubProjects;
