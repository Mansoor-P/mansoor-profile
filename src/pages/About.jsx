import React from "react";
import mansoorImage from "../assets/mansoor.jpg";
import SocialLinks from "../components/SocialLinks";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-6 py-12">
      <h1 className="text-5xl font-bold text-gray-900 text-center lg:text-left">
        About Me
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
          <p className="text-lg text-gray-500">
            Software Developer | Java | Spring Boot | Microservices
          </p>
          <SocialLinks />
        </div>

        {/* Right Section - Description */}
        <div className="lg:w-2/3 text-gray-700 text-lg leading-relaxed text-justify">
          <p>
            I am a passionate and results-driven{" "}
            <span className="font-semibold text-gray-900">
              Software Developer
            </span>{" "}
            specializing in backend development, microservices architecture, and
            cloud-native applications. My expertise includes designing and
            building scalable, high-performance systems using{" "}
            <span className="font-semibold text-gray-900">
              Java, Spring Boot, and RESTful APIs.
            </span>
          </p>

          <p className="mt-4">
            My technical proficiency spans{" "}
            <span className="font-semibold">
              System Design, Microservices Architectures.
            </span>
            I have hands-on experience working with databases like{" "}
            <span className="font-semibold">
              MySQL, PostgreSQL, and MongoDB
            </span>
            , as well as containerization and orchestration tools such as{" "}
            <span className="font-semibold">Docker and Kubernetes.</span>
          </p>

          <p className="mt-4">
            I am deeply interested in{" "}
            <span className="font-semibold">
              distributed systems, cloud computing, DevOps practices, and
              scalable backend solutions.
            </span>
            I actively engage in open-source projects and continuously explore
            emerging technologies to enhance software development best
            practices.
          </p>

          <p className="mt-4">
            Let's connect and collaborate on innovative solutions!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
