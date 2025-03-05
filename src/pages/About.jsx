import { motion } from "framer-motion";
import mansoorImage from "../assets/mansoor.jpg";
import SocialLinks from "../components/SocialLinks";

const About = () => {
  return (
    <section className="max-w-5xl mx-auto mt-16 px-6 py-12">
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        About Me
      </motion.h1>
      <div className="mt-6 border-t border-gray-300 dark:border-gray-600"></div>

      {/* Main Content */}
      <motion.div
        className="flex flex-col lg:flex-row items-center lg:items-start mt-10 gap-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Left Section - Profile */}
        <div className="flex flex-col items-center text-center lg:w-1/3">
          <img
            src={mansoorImage}
            alt="Mansoor Pathikonda"
            className="w-40 md:w-48 h-40 md:h-48 object-cover rounded-full border-4 border-gray-300 dark:border-gray-600 shadow-lg"
            aria-label="Profile Picture of Mansoor Pathikonda"
          />
          <h2 className="text-xl md:text-2xl font-semibold mt-4 dark:text-gray-100">
            Mansoor Pathikonda
          </h2>
          <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
            Software Developer | Java | Spring Boot | Microservices
          </p>
          <SocialLinks />
        </div>

        {/* Right Section - Description */}
        <div className="lg:w-2/3 text-gray-700 dark:text-gray-300 text-md md:text-lg leading-relaxed text-center lg:text-left">
          <p>
            I am a passionate{" "}
            <span className="font-semibold text-gray-900 dark:text-gray-100">
              Software Developer
            </span>{" "}
            specializing in backend development, microservices, and cloud-native
            applications. My expertise includes building scalable systems using{" "}
            <span className="font-semibold">
              Java, Spring Boot, and REST APIs.
            </span>
          </p>

          <p className="mt-4">
            My technical proficiency spans{" "}
            <span className="font-semibold">
              System Design, Microservices, and Distributed Systems.
            </span>{" "}
            I have hands-on experience with databases like{" "}
            <span className="font-semibold">
              MySQL, PostgreSQL, and MongoDB
            </span>
            , as well as containerization tools like{" "}
            <span className="font-semibold">Docker and Kubernetes.</span>
          </p>

          <p className="mt-4">
            I am deeply interested in{" "}
            <span className="font-semibold">
              cloud computing, DevOps, and scalable backend solutions.
            </span>{" "}
            I actively contribute to open-source projects and continuously
            explore emerging technologies to enhance software development best
            practices.
          </p>

          <p className="mt-4 font-medium text-indigo-600 dark:text-indigo-400">
            Let’s connect and build something amazing together!
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
