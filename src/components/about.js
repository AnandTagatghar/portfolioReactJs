import React from "react";
import "./aboutCSS.css";

const About = () => {
  return (
    <div>
      <section id="About" className="mb-3">
        <div className="jumbotron">
          <div className="header py-3">
            <h1>About</h1>
          </div>
          <div className="row pb-5">
            <div className="col-md-8 col-sm-12 body">
              <h2 className="py-5 mx-3 ">
                Looking for a Job opportunity as a fresher as a full stack
                software developer.
              </h2>
            </div>
            <div className="col-md-12">
              <h4 className="px-3 mx-5">
                Seeking for a job to pursue a highly rewarding career and
                healthy work environment where I can utilize my skills and
                knowledge efficiently for the organizational growth. To deliver
                quality, accuracy and efficiency in my day to day job, and to
                put my heart and soul to leverage my exceptional caliber.{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
