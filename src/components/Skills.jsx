import React from "react";
import javaImg from "../assets/skills/java.png";

import mysqlImg from "../assets/skills/mysql.png";
import mongodbImg from "../assets/skills/mongodb.png";
import postgresqlImg from "../assets/skills/postgresql.png";
import reactImg from "../assets/skills/react.png";
import springbootImg from "../assets/skills/springboot.png";

const skills = [
  { name: "Java", img: javaImg },
  { name: "MySQL", img: mysqlImg },
  { name: "MongoDB", img: mongodbImg },
  { name: "PostgreSQL", img: postgresqlImg },
  { name: "React", img: reactImg },
  { name: "Spring Boot", img: springbootImg },
];

const Skills = () => {
  return (
    <div className="flex justify-center gap-4 p-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex flex-col items-center">
          <img
            src={skill.img}
            alt={skill.name}
            className="w-32 h-32 object-contain transition-transform duration-300 hover:scale-110 "
          />
          {/* <p className=" text-sm text-black">{skill.name}</p> */}
        </div>
      ))}
    </div>
  );
};

export default Skills;
