import React, { FC } from "react";
import Modal from "./Modal";

const Item: FC<{
  icon: string;
  id: string;
  title: string;
  content: string;
  link?: string;
}> = ({ icon, id, title, content, link }) => {
  return (
    <div>
      <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
        <div className="portfolio-item-caption-content text-center text-white">
          <i className="fas fa-plus fa-3x"></i>
        </div>
      </div>
      <img
        className="img-fluid"
        src={require(`../assets/img/portfolio/${icon}.jpeg`).default}
        alt="..."
      />
      <Modal icon={icon} id={id} title={title} content={content} link={link} />
    </div>
  );
};

export default Item;
