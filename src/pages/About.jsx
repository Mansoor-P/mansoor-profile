import React from "react";
import mansoorImage from "../assets/mansoor.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SocialLinks from "../components/reUsableComponents/SocialLinks";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto mt-6 px-6 py-12">
      <h1 className="text-5xl font-bold text-gray-900 text-center lg:text-left">
        About
      </h1>
      <div className="mt-6 border-t border-gray-300"></div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start mt-10 gap-8">
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
        <div className="lg:w-2/3 text-gray-700 text-lg leading-relaxed text-justify">
          <p>
            I'm Mansoor, a software engineer specializing in backend development
            and distributed systems. I have a strong foundation in designing and
            building scalable, resilient, and maintainable applications using
            <span className="font-semibold text-gray-900">
              {" "}
              Java, Spring Boot, and microservices architecture.
            </span>
          </p>
          <p className="mt-4">
            My interests include{" "}
            <span className="font-semibold">
              system design, software architecture, domain-driven design (DDD),
              event-driven systems, and DevOps.
            </span>{" "}
            I love learning, sharing knowledge, and solving complex challenges.
            Additionally, I am an open-source enthusiast.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
