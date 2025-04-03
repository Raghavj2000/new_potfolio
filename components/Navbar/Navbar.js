"use client";

import React, { useState } from "react";
import "./navbar.scss";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navlinks = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Contact", link: "/contact" },
  ];

  const toggleOpen = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <div className="navbar_container_mob">
      <div className="name_container">Raghav</div>
      <div className="menu_container" onClick={toggleOpen}>
        {menuOpen ? (
          <X color="white" size={25} />
        ) : (
          <Menu color="white" size={25} />
        )}
      </div>

      {/* Mobile Menu */}
      <div className={`mobile_menu ${menuOpen ? "open" : ""}`}>
        <ul>
          {navlinks.map((nav, index) => (
            <li key={index}>
              <a href={nav.link} onClick={toggleOpen}>
                {nav.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
