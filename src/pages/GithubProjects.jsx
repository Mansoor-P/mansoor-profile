import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // ✅ Import JSON-like array

const GithubProjects = () => {
  return (
    <section className="mt-20 min-h-screen px-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        GitHub Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.length > 0 ? (
          projects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              link={project.link}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No projects available.
          </p>
        )}
      </div>
    </section>
  );
};

export default GithubProjects;
