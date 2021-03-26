import React from "react";

const Courses = () => {
  return (
    <div>
      <section id="courses" className="mb-3">
        <div className="header py-3">
          <h1>Courses</h1>
        </div>
        <div className="body">
          <div className="container">
            <div className="row py-5 justify-content-start ">
              <div className="col-md-5 py-5 box">
                <h2 className=" heading">Python Specialization</h2>
                <h5 className="text-muted">on Coursera.</h5>
              </div>
              <div className="col-md-5 py-5 box">
                <h2 className="heading">
                  Full stack developer python-Django Bootcamp
                </h2>
                <h5 className="text-muted">on Udemy.</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;
