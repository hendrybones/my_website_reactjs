import React from "react";
import Typical from "react-typical";
import "./Profile.css";

export default function profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="#">
              <i className="fa fa-facebook-square"></i>
            </a>

            <a href="#">
              <i className="fa fa-google-plus-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fa fa-youtube-square"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'M{" "}
              <span className="highlighted-text">boneshendryTec</span>
            </span>
          </div>

          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Ethusiatic Dev ",
                    1000,
                    "Full stack developer",
                    1000,
                    "Angular developer",
                    1000,
                    "Java spring boot",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Your best software developer both front and back operations
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {" "}
              Hire Me{" "}
            </button>
            <a href="hendry resume.pdf" download="bonesHendry hendry resume.pdf">
              <button className="btn highlighted-btn"> Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background">

          </div>
        </div>
      </div>
    </div>
  );
}
