import javaImg from "../assets/skills/java.png";
import dockerImg from "../assets/skills/docker.png";
import mysqlImg from "../assets/skills/mysql.png";
import mongodbImg from "../assets/skills/mongodb.png";
import postgresqlImg from "../assets/skills/postgresql.png";
import reactImg from "../assets/skills/react.png";
import springbootImg from "../assets/skills/springboot.png";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", img: javaImg },
  { name: "React", img: reactImg },
  { name: "Spring Boot", img: springbootImg },
  { name: "Docker", img: dockerImg },
  { name: "MySQL", img: mysqlImg },
  { name: "MongoDB", img: mongodbImg },
  { name: "PostgreSQL", img: postgresqlImg },
];

const Skills = () => {
  return (
    <div className="flex justify-center gap-2">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <motion.img
            src={skill.img}
            alt={skill.name}
            className="w-48 h-20 object-contain "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.1, zoom: 1.4 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
