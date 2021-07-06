import React, { FC } from "react";

const Modal: FC<{
  icon: string;
  id: string;
  title: string;
  content: string;
  link?: string;
}> = ({ icon, id, title, content, link }) => {
  return (
    <div
      className="portfolio-modal modal fade"
      id={id}
      aria-labelledby={id}
      aria-hidden="true"
    >
      <div className="modal-dialog modal-xl">
        <div className="modal-content">
          <div className="modal-header border-0">
            <button
              className="btn-close"
              type="button"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body text-center pb-5">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-8">
                  <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">
                    {title}
                  </h2>
                  <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon">
                      <i className="fas fa-star"></i>
                    </div>
                    <div className="divider-custom-line"></div>
                  </div>
                  <img
                    className="img-fluid rounded mb-5"
                    src={
                      require(`../assets/img/portfolio/${icon}.jpeg`).default
                    }
                    alt="..."
                  />
                  <p className="mb-4">
                    {content}
                    <a href={link}>{link}</a>
                  </p>
                  <button className="btn btn-primary" data-bs-dismiss="modal">
                    <i className="fas fa-times fa-fw"></i>
                    Close Window
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
