import React from "react";
import { Link } from "react-router-dom";
import "./Modal.css";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import NotificationsIcon from "@mui/icons-material/Notifications";

const Modal = ({ modalClose }) => {
  const onCloseModal = (e) => {
    console.log("e.target: ", e.target);
    console.log("e.tarcurrentTargetget: ", e.currentTarget);
    if (e.target === e.currentTarget) {
      modalClose();
    }
  };
  return (
    <div className="modal__container" onClick={onCloseModal}>
      <div className="modal">
        <CloseIcon
          fontSize="large"
          className="modal__button"
          onClick={modalClose}
        />
        <div className="welcome">
          <p>OOO님 환영합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
