import React from "react";
import { Link } from "react-router";
const Resume = () => {
  return (
    <section className="mt-10">
      <div className="p-4">
        <Link
          to="/"
          className="no-underline text-blue-500 hover: flex items-center"
        >
          <span className="text-lg">←</span>{" "}
          <span className="ml-2">Back Home</span>
        </Link>
      </div>
      <div className="mt-1 max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold">MANSOOR PATHIKONDA</h1>
          <p className="text-gray-600">
            Marathahalli, Bangalore, Karnataka - 560037
          </p>
          <p className="mt-1">
            <a
              href="mailto:mansoorpathikonda@gmail.com"
              className="text-blue-500 hover:underline"
            >
              mansoorpathikonda@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="https://linkedin.com/in/mansoor0731"
              className="text-blue-500 hover:underline"
            >
              linkedin.com/in/mansoor0731
            </a>{" "}
            |{" "}
            <a
              href="https://github.com/Mansoor-P"
              className="text-blue-500 hover:underline"
            >
              github.com/Mansoor-P
            </a>
          </p>
        </div>

        <hr className="my-4 border-gray-400" />

        {/* Profile Summary */}
        <section>
          <h2 className="text-xl font-semibold">Profile Summary</h2>
          <p className="text-gray-500 p-2 rounded-md">
            Enthusiastic MCA graduate skilled in{" "}
            <span className="bg-green-200 font-semibold rounded  px-1">
              Java, Spring Boot, React.js, and Microservices
            </span>
            . Proficient in building REST APIs and familiar with cloud
            technologies and Docker at a beginner level. Ready to bring strong
            problem-solving abilities and a passion for continuous learning to a
            software development role.
          </p>
        </section>

        <hr className="my-4 border-gray-400" />

        {/* Technical Skills */}
        <section>
          <h2 className="text-xl font-semibold">Technical Skills</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <span className="font-bold">Programming Languages:</span> C,
              <span className="bg-green-200 px-1 rounded">
                {" "}
                Java, JavaScript, SQL
              </span>
            </li>
            <li>
              <span className="font-bold">Frontend Technologies:</span>{" "}
              HTML/CSS,{" "}
              <span className="bg-blue-200 px-1 rounded">
                React.js, Tailwind, Bootstrap
              </span>
            </li>
            <li>
              <span className="font-bold">Backend Technologies:</span>{" "}
              <span className="bg-pink-200 px-1 rounded">
                Spring Boot, Hibernate, Microservices, REST API, Docker
              </span>
            </li>
            <li>
              <span className="font-bold">Databases:</span>{" "}
              <span className="bg-blue-200 px-1 rounded">
                MySQL, PostgreSQL, MongoDB
              </span>
            </li>
            <li>
              <span className="font-bold">Development Tools:</span> Git, GitHub,
              Postman, Docker-Desktop, IntelliJ IDEA, Eclipse
            </li>
            <li>
              <span className="font-bold">Key Coursework:</span>{" "}
              <span className="bg-yellow-200 px-1 rounded">
                Data Structures Algorithms, Database Management Systems (DBMS),
                Operating Systems, Software Development Life Cycle (SDLC)
              </span>
              ,{" "}
              <span className="bg-green-200 px-1 rounded">
                System Design, Networking
              </span>
              , Agile Methodologies
            </li>
            <li>
              <span className="font-bold">Soft Skills:</span> Problem Solving,
              Teamwork, Communication
            </li>
          </ul>
        </section>

        <hr className="my-4 border-gray-400" />

        {/* Education */}
        <section className="p-6 bg-gray-50 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-gray-300 pb-2 mb-4">
            Education
          </h2>

          {/* GATE CSE 2025 */}
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900">
              📌 GATE CSE 2025 Aspirant
            </h3>
            <p className="mt-2 text-gray-700">
              {"-> "}<span className="font-semibold">GATE CSE 2025</span>{" "}
              with a focus on{" "}
              <span className="font-semibold">
                Data Structures, Algorithms, Operating Systems, DBMS, Computer
                Networks,
              </span>{" "}
            </p>
            <p className="mt-2 text-gray-700">
              {" -> "} Strong foundation in{" "}
              <span className="font-semibold">problem-solving</span> and{" "}
              <span className="font-semibold">competitive programming.</span>
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="space-y-5">
            {/* MCA */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 Sri Venkateswara University
              </h3>
              <p className="text-gray-700">
                Master of Computer Applications (MCA) -{" "}
                <span className="font-semibold">8.2 CGPA</span>
              </p>
              <p className="text-sm text-gray-500">
                2021–2023 | Tirupati, Andhra Pradesh
              </p>
            </div>

            {/* BSc */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 The Adoni Arts and Science College
              </h3>
              <p className="text-gray-700">
                Bachelor of Science (BSc) -{" "}
                <span className="font-semibold">8.0 CGPA</span>
              </p>
              <p className="text-sm text-gray-500">
                2018–2021 | Adoni, Andhra Pradesh
              </p>
            </div>

            {/* Senior Secondary */}
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 Sri Sathya Sai Jr College
              </h3>
              <p className="text-gray-700">
                Senior Secondary XII (MPC) -{" "}
                <span className="font-semibold">93.1%</span>
              </p>
              <p className="text-sm text-gray-500">
                2016–2018 | Anantapur, Andhra Pradesh
              </p>
            </div>
          </div>
        </section>

        <hr className="my-4 border-gray-400" />

        {/* Projects */}
        <section>
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="text-lg font-bold">
                Job Company and Review Web App
              </h3>
              <p className="italic text-lg text-gray-700">
                <span className=" font-bold">Tech Stack:</span> Java, Spring
                Boot, Microservices, PostgreSQL, Docker, RabbitMQ, Zipkin
              </p>
              <div className="mt-4 text-gray-700">
                <p>
                  ✅ Developed a comprehensive Job Company and Review
                  application using Java and Spring Boot, organized around a
                  microservices architecture to achieve modular and scalable
                  development.
                </p>
                <p>
                  ✅ Designed and implemented RESTful APIs for managing job
                  Designed and implemented RESTful APIs for managing job
                  listings, application processes, and reviews, ensuring robust,
                  secure, and efficient data handling.
                </p>
                <p>
                  ✅ Integrated PostgreSQL with Docker for streamlined
                  deployment, enhancing scalability and providing efficient data
                  management.
                </p>
                <p>
                  ✅ Employed RabbitMQ to facilitate asynchronous messaging
                  between microservices, ensuring reliable communication and
                  data flow.
                </p>
                <p>
                  ✅ Utilized Zipkin for distributed tracing, allowing for
                  effective monitoring and debugging of interactions across
                  microservices.
                </p>
                <a
                  href="https://github.com/Mansoor-P/jobsmicroservices"
                  className="text-blue-500 hover:underline"
                >
                  GitHub Link
                </a>
              </div>
            </div>
          </div>
        </section>

        <hr className="my-4 border-gray-400" />

        {/* Achievements */}
        <section>
          <h2 className="text-xl font-semibold">Achievements</h2>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Solved <span className="font-bold">250+ coding problems</span> on
              LeetCode, CodeChef, and HackerRank.
            </li>
            <li>
              Developed a Job Company and Review app using React, Spring Boot,
              and Microservices.
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
};

export default Resume;
