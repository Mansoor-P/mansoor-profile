import javaImg from "../assets/images/skills/java.png";
import dockerImg from "../assets/images/skills/docker.png";
import mysqlImg from "../assets/images/skills/mysql.png";
import mongodbImg from "../assets/images/skills/mongodb.png";
import postgresqlImg from "../assets/images/skills/postgresql.png";
import reactImg from "../assets/images/skills/react.png";
import springbootImg from "../assets/images/skills/springboot.png";

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
            className="w-48 h-20 object-contain"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            whileHover={{ scale: 1.5 }}
          />
        </div>
      ))}
    </div>
  );
};

export default Skills;
