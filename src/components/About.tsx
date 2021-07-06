import React from "react";

const About = () => {
  return (
    <section className="page-section bg-info text-white mb-0" id="about">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-white">
          About
        </h2>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row">
          <div className="col-lg-4 ms-auto">
            <p className="lead">
              I was City excellent Math student in my Secondary School.
              I completed my first internship at a Game Start-up company and 
              learned the whole process of delivering the application technicals,
              SEO, marketing, and communication skills.
            </p>
          </div>
          <div className="col-lg-4 me-auto">
            <p className="lead">
              In my final year at Uni, I became a student ambassador of AWS
              and supported lower-class students in coding
              Since then, I've been an engineer professionally for 2 years, worked as a full-stack engineer.
            </p>
          </div>
        </div>
        <div className="text-center mt-4">
          <a
            className="btn btn-xl btn-outline-light"
            href="https://www.notion.so/Triet-Ngo-Phu-Hoang-2e80cdfb096c4fdabf67e7125c566198"
          >
            <i className="fas fa-download me-2"></i>
            View CV!
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
