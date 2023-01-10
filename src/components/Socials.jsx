import React from "react";

// import social data
import { social } from "../data";

const Socials = ({ textColor, bgColorText }) => {
  return (
    <ul className="flex space-x-6">
      {social.map((item, index) => (
        <li
          key={index}
          className={`flex justify-center items-center text-${textColor} hover:text-${bgColorText}`}
        >
          <a href={item.href} className="text-base">
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Socials;
