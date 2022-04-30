import React, { useState } from "react";
import AdditionalActionsModal from "../../shared/AdditionalActionsModal";
import NotificationSvg from "../../svg/Notification";
import Navigation from "../Navigation";
import styles from "./styles.module.scss";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/logo.png"></img>
      </div>
      <Navigation openAdditionalActionsModal={() => setIsModalOpen(true)} />
      <div className={styles.notificationsContainer}>
        <NotificationSvg />
      </div>
      {isModalOpen && (
        <AdditionalActionsModal
          closeModal={() => {
            setIsModalOpen(false);
          }}
        />
      )}
    </header>
  );
}

export default Header;
