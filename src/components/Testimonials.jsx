import React from "react";

// import components
import TestimonialSlider from "./TestimonialSlider";



const Testimonials = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block">
            What people say
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, eos
            rem sequi deserunt aliquam neque officiis nesciunt omnis iste earum
            nobis perferendis mollitia. Asperiores nisi tempore, porro ut ex sit
            eius sed id quae consectetur voluptatibus eligendi officia nemo
            quia!
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonials;
