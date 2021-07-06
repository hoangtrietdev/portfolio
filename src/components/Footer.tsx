import React from "react";

const Footer = () => {
  return (
    <footer className="footer text-center bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Location</h4>
            <p className="lead mb-0">
              41 Nguyen Tat Thanh
              <br />
              Hai Chau, Da Nang
            </p>
          </div>
          <div className="col-lg-4 mb-5 mb-lg-0">
            <h4 className="text-uppercase mb-4">Around the Web</h4>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.facebook.com/profile.php?id=100006030946152"
            >
              <i className="fab fa-fw fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://github.com/hoangtrietdev/"
            >
              <i className="fab fa-fw fa-github"></i>
            </a>
            <a
              className="btn btn-outline-light btn-social mx-1"
              href="https://www.linkedin.com/in/triet-ngo-phu-hoang-417683180/"
            >
              <i className="fab fa-fw fa-linkedin-in"></i>
            </a>
          </div>
          <div className="col-lg-4">
            <h4 className="text-uppercase mb-4">About Freelancer</h4>
            <p className="lead mb-0">
              Freelance is a free to use, MIT licensed Bootstrap theme created
              by
              <a href="http://startbootstrap.com"> Start Bootstrap</a>.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
