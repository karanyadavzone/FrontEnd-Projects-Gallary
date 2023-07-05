import React, { useState } from "react";
import Modal from "react-modal";
import "./Project2.css";

const Project2 = () => {
  Modal.setAppElement("#root");

  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <figure class="card">
        <img src="./Blog.jpg" alt="..." class="card__image"/>
        <figcaption class="card__body">
          <div>
            <h2 class="card__category">Karan Yadav</h2>
            <p class="card__author">FileManager</p>
          </div>
          <div className="gap-[2rem]">
            <a href="#" class="card__button text-sm mr-[15px]">
              GitHub
            </a>
            <a href="#" class="card__button text-sm" onClick={handleOpenModal}>
              View Details
            </a>
          </div>
        </figcaption>
      </figure>
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

export default Project2;
