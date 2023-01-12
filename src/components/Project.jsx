import React from "react";

const Project = ({ item }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-8">
        <img src={item.image} alt="project" className="rounded-2xl" />
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
      <h3 className="text-2xl font-semibold capitalize mb-3">{item.name}</h3>
    </div>
  );
};

export default Project;
