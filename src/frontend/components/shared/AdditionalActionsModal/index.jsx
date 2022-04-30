import React, { useEffect, useRef } from "react";
import CameraSvg from "../../svg/Camera";
import MailSvg from "../../svg/Mail";
import VideoSvg from "../../svg/Video";
import Modal from "../Modal";
import styles from "./styles.module.scss";

function AdditionalActionsModal({ closeModal }) {
  const element = useRef(null);

  const clickHandler = (evt) => {
    if (!element.current.contains(evt.target)) closeModal();
  };

  useEffect(() => {
    document.body.addEventListener("click", clickHandler, true);

    return () => {
      document.body.removeEventListener("click", clickHandler);
    };
  }, []);

  return (
    <Modal>
      <ul ref={element} className={styles.modalContent}>
        <li className={styles.actionItem}>
          <CameraSvg />
          Create Post
        </li>
        <li className={styles.actionItem}>
          <VideoSvg />
          Upload Video
        </li>
      </ul>
    </Modal>
  );
}

export default AdditionalActionsModal;
