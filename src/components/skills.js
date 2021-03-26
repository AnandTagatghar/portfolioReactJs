import React from "react";
import "./skillsCSS.css";
import java from "./img/java-logo-1.png";
import springBoot from "./img/springboot-logo-1.png";
import python from "./img/python-logo-1.png";
import django from "./img/django-logo-1.png";
import html from "./img/html-logo-1.png";
import javascript from "./img/js-logo-1.png";
import reactjs from "./img/react-logo-1.png";
import css from "./img/css-logo-1.png";
import bootstrap from "./img/bootstrap-logo-1.png";

const Skills = () => {
  return (
    <div>
      <section id="skills" className="mb-3">
        <div className="jumbotron">
          <div className="header py-3">
            <h1>Skills</h1>
          </div>
          <div className="row py-5 justify-content-center">
            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">Java</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={java} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">Spring Boot</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={springBoot} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">Python</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={python} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">Django</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={django} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">HTML</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={html} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">JavaScript</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={javascript} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">React Js</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={reactjs} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">CSS</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={css} alt="missing" />
              </div>
            </div>

            <div className="col-md-3 pb-3 col-sm-5 box boxwhite">
              <h5 className="mt-3">Bootstrap</h5>
              <hr />
              <div className="text-center">
                <img className="imgSize" src={bootstrap} alt="missing" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
