import React from "react";
import "./educationCSS.css";

const Education = () => {
  return (
    <div>
      <section id="Education" className="mb-3">
        <div className="jumbotron jumbotronWhite">
          <div className="py-3 mx-3">
            <h1>Education</h1>
          </div>
          <div className="row justify-content-center ">
            <div className="col-md-5 box">
              <h2 className="pt-5">
                Jaya Prakash Narayan College of Engineering.
              </h2>
              <h5 className="text-muted">Mahabubnagar.</h5>

              <ul className="pt-3">
                <li className="education">B.Tech</li>
              </ul>
            </div>
            <div className="col-md-5 box">
              <h2 className="pt-5">Sri Sai Co-op Jr College.</h2>
              <h5 className="text-muted">Narayanpet.</h5>
              <ul className="pt-3">
                <li className="education"> Intermediate(TS Board)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
