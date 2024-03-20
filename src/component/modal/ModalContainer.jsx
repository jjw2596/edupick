import React, { useState } from "react";
import Modal from "./Modal";
import MenuIcon from "@mui/icons-material/Menu";

const ModalContainer = ({ isLogin }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalClose = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <MenuIcon className="burger" onClick={modalClose} fontSize="large" />
      {modalOpen && <Modal modalClose={modalClose} isLogin={isLogin}></Modal>}
    </>
  );
};

export default ModalContainer;
