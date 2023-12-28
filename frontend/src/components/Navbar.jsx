import React from "react";
import { FaHome } from "react-icons/fa";
import { CgAddR } from "react-icons/cg";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="navbar-containe">
        <ul className="list-container">
          <li>
            <a href="/" className="nav-link">
              <FaHome />
              {/* <p>Home</p> */}
            </a>
          </li>
          <li>
            <a href="/create/blog" className="nav-link">
              <CgAddR />
              {/* <p>Home</p> */}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
