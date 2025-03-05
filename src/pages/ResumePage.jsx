import { Link } from "react-router-dom";

const ResumePage = () => {
  return (
    <section className="mt-16">
      <div className="p-4">
        <Link
          to="/"
          className="no-underline text-blue-500 hover:flex items-center"
        >
          <span className="text-lg">←</span>
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
            <span className="bg-green-200 font-semibold rounded px-1">
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
              <span className="font-bold">Programming Languages:</span>{" "}
              <span className="bg-green-200 px-1 rounded">
                Java, JavaScript, SQL, C
              </span>
            </li>
            <li>
              <span className="font-bold">Frontend Technologies:</span>{" "}
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
              Postman, IntelliJ IDEA, Eclipse
            </li>
            <li>
              <span className="font-bold">Key Coursework:</span>{" "}
              <span className="bg-yellow-200 px-1 rounded">
                DSA, DBMS, OS, Networking, System Design, Agile Methodologies
              </span>
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
              {"-> "} Focusing on{" "}
              <span className="font-semibold">
                DSA, OS, DBMS, Computer Networks, System Design, Competitive
                Programming
              </span>
            </p>
          </div>

          {/* Academic Qualifications */}
          <div className="space-y-5">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 Sri Venkateswara University
              </h3>
              <p className="text-gray-700">
                MCA - <span className="font-semibold">8.2 CGPA</span>
              </p>
              <p className="text-sm text-gray-500">
                2021–2023 | Tirupati, Andhra Pradesh
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 The Adoni Arts and Science College
              </h3>
              <p className="text-gray-700">
                BSc - <span className="font-semibold">8.0 CGPA</span>
              </p>
              <p className="text-sm text-gray-500">
                2018–2021 | Adoni, Andhra Pradesh
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                📌 Sri Sathya Sai Jr College
              </h3>
              <p className="text-gray-700">
                XII (MPC) - <span className="font-semibold">93.1%</span>
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
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-bold">
              Job Company and Review Web App
            </h3>
            <p className="italic text-lg text-gray-700">
              <span className="font-bold">Tech Stack:</span> Java, Spring Boot,
              Microservices, PostgreSQL, Docker, RabbitMQ, Zipkin
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>
                Developed a Job Company and Review app using Java, Spring Boot,
                and Microservices.
              </li>
              <li>
                Implemented RESTful APIs for managing job listings,
                applications, and reviews.
              </li>
              <li>
                Integrated PostgreSQL with Docker for efficient data management.
              </li>
              <li>
                Used RabbitMQ for asynchronous messaging between microservices.
              </li>
              <li>Employed Zipkin for distributed tracing and monitoring.</li>
            </ul>
            <a
              href="https://github.com/Mansoor-P/jobsmicroservices"
              className="text-blue-500 hover:underline"
            >
              GitHub Link
            </a>
          </div>
        </section>
        {/* Article Posting Platform */}
        <section>
          <h2 className="text-xl font-semibold">Projects</h2>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h3 className="text-lg font-bold">Article Posting Platform</h3>
            <p className="italic text-lg text-gray-700">
              <span className="font-bold">Tech Stack:</span> Java, Spring Boot,
              Microservices, Spring Security, JWT, React, Tailwind CSS
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-700 space-y-2">
              <li>
                Developing a scalable article posting platform using Java and
                Spring Boot with a microservices architecture.
              </li>
              <li>
                Implementing authentication and role-based access control using
                Spring Security and JWT.
              </li>
              <li>
                Designing a responsive frontend using React and Tailwind CSS for
                an improved user experience.
              </li>
            </ul>
            <a
              href="https://github.com/Mansoor-P/blog-application"
              className="text-blue-500 hover:underline"
            >
              GitHub Link
            </a>
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResumePage;
