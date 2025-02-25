import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

const ITEMS_PER_PAGE = 4;

const GithubProjects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedProjects = projects.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <section className="mt-24 min-h-screen px-6 max-w-6xl mx-auto">
      {/* Title */}
      <h1 className="text-5xl font-bold text-gray-900 mb-8 text-center">
        GitHub Projects
      </h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {selectedProjects.length > 0 ? (
          selectedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              name={project.name}
              description={project.description}
              link={project.link}
              image={project.image}
            />
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No projects available.
          </p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-8 space-x-4">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          {"<"}
        </button>
        <span className="text-lg font-medium">
          {currentPage} of {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md disabled:opacity-50"
        >
          {">"}
        </button>
      </div>
    </section>
  );
};

export default GithubProjects;
