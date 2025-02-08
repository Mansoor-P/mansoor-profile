import React from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects"; // ✅ Import JSON-like array

const GithubProjects = () => {
  return (
    <section className="mt-10 min-h-screen ">
      <h1 className="text-6xl font-bold text-gray-900 mb-6">GitHub Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default GithubProjects;
