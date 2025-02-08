import React from "react";
import mansoorImage from "../assets/mansoor.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";
const About = () => {
  return (
    <section className="max-w-5xl mx-auto mt-6 px-6 py-12">
      <h1 className="text-5xl font-bold text-gray-900">About</h1>
      <div className="mt-6 border-t border-gray-300"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10">
        {/* Left Section - Profile */}
        <div className="flex flex-col items-center text-center lg:w-1/3">
          <img
            src={mansoorImage}
            alt="Mansoor Pathikonda"
            className="w-48 h-48 object-cover rounded-full border-4 border-gray-300 shadow-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">Mansoor Pathikonda</h2>
          <p className="text-lg text-gray-500">Aspiring Software Engineer</p>
          <SocialLinks />
        </div>

        {/* Right Section - Description */}
        <div className="lg:w-2/3 lg:pl-10 mt-6 lg:mt-0 text-gray-700 text-lg leading-relaxed text-justify">
          <p>
            I'm Mansoor, a software engineer specializing in backend development
            and distributed systems. I have a strong foundation in designing and
            building scalable, resilient, and maintainable applications using
            Java, Spring Boot, and microservices architecture.
          </p>
          <p className="mt-4">
            My interests include system design, software architecture,
            domain-driven design (DDD), event-driven systems, and DevOps. I love
            learning, sharing knowledge, and solving complex challenges.
            Additionally, I am an open-source enthusiast.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-10 text-center text-gray-500">
        <div className="flex justify-center space-x-4 text-xl">
          <FaGithub />
          <FaLinkedin />
        </div>
        <p className="mt-2">Mansoor Pathikonda • © 2025 • Mansoor Blog</p>
      </div>
    </section>
  );
};

export default About;
