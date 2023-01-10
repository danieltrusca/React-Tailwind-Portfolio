import React from "react";

// import navigation data
import { navigation } from "../data";

// import link
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex space-x-8 capitalize text-[15px]">
        {navigation.map((n, index) => (
          <li
            key={index}
            className="text-white hover:text-accent cursor-pointer"
          >
            <Link
              to={n.href}
              activeClass="active"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="transition-all duration-300"
            >
              {n.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
