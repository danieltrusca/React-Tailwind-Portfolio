import React, { useState, useEffect } from "react";

// import data
import { projectsData, projectsNav } from "../data";

// import components
import Project from "./Project";

const Projects = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter(
        (project) => project.category.toLowerCase() === item.name.toLowerCase()
      );
      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (name, index) => {
    setItem({ name: name.toLowerCase() });
    setActive(index);
  };
  return (
    <div>
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => (
            <li
              key={index}
              onClick={() => handleClick(item.name, index)}
              className={`${
                active === index ? "active" : ""
              } cursor-pointer capitalize m-4`}
            >
              {item.name}
            </li>
          ))}
        </ul>
      </nav>

      {/* projects grid */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-8 lg:gap-y-8">
        {projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Projects;
