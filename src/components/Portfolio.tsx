import React from "react";
import Item from "./Item";

const Portfolio = () => {
  const objects = [
    {
      icon: "cabin",
      id: "portfolioModal1",
      title: "Legend of Runeterra (RIOT)",
      content:
        "On the game client side, we used C# and Unity to handle the game logic and UI and created the client's game server to handle API and shared game data. On the server-side (Service), we created the micro-services project with more than 20 services and used python to create the quest scripts.",
    },
    {
      icon: "cake",
      id: "portfolioModal2",
      title: "Dungeon and Puzzle (In House)",
      content:
        "In House Match 3 games, we used C#, Unity and Protobuf to comunicate with server. On the server-side, we use Java, gradle and AWS",
    },
    {
      icon: "game",
      id: "portfolioModal3",
      title: "Gold Miner Tycoon (Out Source)",
      content:
        "I join in a start up company and out source for Korean publisher, we used C#, Unity",
    },
    {
      icon: "cake",
      id: "portfolioModal4",
      title: "In House Tool",
      content:
        "Use stack ReactJS and NodeJS to create the manage data tool. Support Game Designer in level desgin, managing game version and deploy data to Redis",
    },
    {
      icon: "circus",
      id: "portfolioModal5",
      title: "AR Book",
      link: "https://drive.google.com/drive/u/2/folders/1cUimOiT32-Q7erWhfCENa8fLjmiMRSv6",
      content:
        "My graduation project with Unity and Vuforia, using phone to scan the book pages and show 3D models and turn on the story audio ",
    },
    {
      icon: "submarine",
      id: "portfolioModal6",
      title: "Terris",
      content: "Learning OOP with JS by creating mini games ",
      link: "https://hoangtrietdev.github.io/Tetris-game-with-js/",
    },
  ];
  return (
    <section className="page-section portfolio" id="portfolio">
      <div className="container">
        <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">
          Portfolio
        </h2>
        <div className="divider-custom">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal1"
            >
              <Item
                icon={objects[0].icon}
                id={objects[0].id}
                title={objects[0].title}
                content={objects[0].content}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal2"
            >
              <Item
                icon={objects[1].icon}
                id={objects[1].id}
                title={objects[1].title}
                content={objects[1].content}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal3"
            >
              <Item
                icon={objects[2].icon}
                id={objects[2].id}
                title={objects[2].title}
                content={objects[2].content}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-lg-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal4"
            >
              <Item
                icon={objects[3].icon}
                id={objects[3].id}
                title={objects[3].title}
                content={objects[3].content}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-5 mb-md-0">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal5"
            >
              <Item
                icon={objects[4].icon}
                id={objects[4].id}
                title={objects[4].title}
                content={objects[4].content}
                link={objects[4].link}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="portfolio-item mx-auto"
              data-bs-toggle="modal"
              data-bs-target="#portfolioModal6"
            >
              <Item
                icon={objects[5].icon}
                id={objects[5].id}
                title={objects[5].title}
                content={objects[5].content}
                link={objects[5].link}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
