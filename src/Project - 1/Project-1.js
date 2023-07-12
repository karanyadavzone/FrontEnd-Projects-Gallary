import React, { useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import "./Project1.css";

const Project1 = () => {
  Modal.setAppElement("#root");
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const project = [
    {
      img: "./E-Commerce.jpg",
      Dev: "Karan Yadav",
      Title: "E-commerce Website",
      Github: "https://github.com/karanyadavzone",
    },
    {
      img: "./Blog.jpg",
      Dev: "Oliver",
      Title: "E-commerce Website",
      Github: "Github",
    },
    {
      img: "./E-Commerce.jpg",
      Dev: "Karan Yadav",
      Title: "E-commerce Website",
      Github: "Github",
    },
    {
      img: "./Blog.jpg",
      Dev: "Hunny",
      Title: "E-commerce Website",
      Github: "Github",
    },
  ];
  return (
    <>
      {project?.map((name, id) => {
        return (
          <figure class="card">
            <img src="./E-Commerce.jpg" alt="..." class="card__image" />
            <figcaption class="card__body">
              <div>
                <h2 class="card__category">{name.Dev}</h2>
                <p class="card__author">{name.Title}</p>
              </div>
              <div className="gap-[2rem]">
                <Link
                  className="card__button text-sm mr-[15px]"
                  to={name.Github}
                  target="blank"
                >
                  Github
                </Link>
                <a
                  href=""
                  class="card__button text-sm"
                  onClick={handleOpenModal}
                >
                  View Details
                </a>
              </div>
            </figcaption>
          </figure>
        );
      })}
      <Modal
        isOpen={showModal}
        onRequestClose={handleCloseModal}
        style={{
          content: {
            background:
              "linear-gradient(-90.13deg, rgb(29 129 116 / 40%) 1.9%, rgb(15 70 50) 97.5%)",
            color: "#9f9f9f",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            width: "700px",
            height: "auto",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            zIndex: "999",
            borderRadius: "20px",
          },
        }}
      >
        <img
          src="./close.svg"
          className="closeModal"
          onClick={handleCloseModal}
          alt="Close"
        ></img>
        <h3 className="modalTitle z-[999]">Coming Soon</h3>
      </Modal>
    </>
  );
};

export default Project1;
