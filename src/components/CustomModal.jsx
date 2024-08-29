import React from "react";
import Modal from "react-modal";
import "../styles/Modal.css";

Modal.setAppElement("#root");

const CustomModal = ({ isOpen, onRequestClose, contentLabel, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="custom-modal-content"
      overlayClassName="custom-modal-overlay"
      contentLabel={contentLabel}
    >
      {children}
      <button
        onClick={onRequestClose}
        className="custom-modal-close-button"
      ></button>
    </Modal>
  );
};

export default CustomModal;
