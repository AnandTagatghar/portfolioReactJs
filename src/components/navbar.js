import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light my-3">
      <a class="navbar-brand" href="#">
        @Anand_Tagatghar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#About">
              About <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#Education">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#skills">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
