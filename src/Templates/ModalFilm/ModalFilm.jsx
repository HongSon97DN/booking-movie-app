import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_MODAL } from "../../redux/types/ModalType";
import "./modal.css";

export default function ModalFilm() {
  const dispatch = useDispatch();
  const { show, ComponentContentModal } = useSelector(
    (state) => state.ModalFilmReducer
  );

  const handleClose = () => dispatch({ type: CLOSE_MODAL });
  return (
    <>
      <>
      <Modal
          show={show}
          onHide={handleClose}
          style={{ border: "none", margin: "auto 0" }}
        >
          <i
            className="fa-solid fa-xmark modal-close ml-auto"
     
            onClick={handleClose}
          ></i>
          <Modal.Body style={{ backgroundColor: "#182028" }}>
            {ComponentContentModal}
          </Modal.Body>
        </Modal>
      </>
    </>
  );
}
