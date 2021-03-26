import React from "react";
import "./contactCSS.css";
import gmail from "./img/gmail.png";
import github from "./img/github.png";
import linkedin from "./img/linkedin.png";
import insta from "./img/insta.jpg";

const Contact = () => {
  return (
    <div>
      <footer id="contact">
        <div className="jumbotron">
          <div className="ml-3 py-3">
            <h1>Contact</h1>
          </div>
          <div className="row justify-content-between">
            <div className="col text-center">
              <div>
                <a href="https://mail.google.com/mail/u/0/#inbox">
                  <img className="contactImg" src={gmail} alt="missing" />
                </a>
              </div>
            </div>

            <div className="col text-center">
              <div>
                <a href="https://github.com/AnandTagatghar">
                  <img className="contactImg" src={github} alt="missing" />
                </a>
              </div>
            </div>

            <div className="col text-center">
              <div>
                <a href="https://www.linkedin.com/in/tagatghar-anand-kumar-958b46206/">
                  <img className="contactImg" src={linkedin} alt="missing" />
                </a>
              </div>
            </div>

            <div className="col text-center">
              <div>
                <a href="https://www.instagram.com/anandtagatghar">
                  <img className="contactImg" src={insta} alt="missing" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
