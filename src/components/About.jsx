import React from "react";

// import image
import Image from "../assets/img/about.webp";

const About = () => {
  return (
    <section className="section bg-secondary" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-24">
          <img
            className="object-cover h-full w-[566px] md:mx-auto lg:mx-0 rounded-2xl"
            src={Image}
            alt="about"
          />
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="flex flex-col">
              <h2 className="text-3xl lg:text-4xl font-medium lg:font-extrabold mb-3 before:content-about relative before:absolute before:opacity-40 before:-top-[2rem] before:hidden before:lg:block">
                Jane Wilson
              </h2>
              <p className="mb-4 text-accent">Freelance Web Developer</p>
              <hr className="mb-8 opacity-5" />
              <p className="mb-8">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Reiciendis nulla voluptates quis, pariatur provident natus id
                exercitationem voluptatibus qui aut. Reiciendis eaque eum qui
                voluptas. <br /> Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Eum mollitia porro doloremque fugiat pariatur
                animi numquam voluptatem distinctio, consequuntur repellat
                voluptates perferendis provident at ratione architecto cumque
                inventore officiis iste!
              </p>
            </div>
            <button className="btn btn-md bg-accent hover:bg-accent-hover transition-all duration-300">
              Contact me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
