import React from "react";

// import skills images
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-between items-center">
          {skills.map((item, index) => (
            <div className="flex justify-center items-center" key={index}>
              <img src={item.image} alt="skill" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
