import React from "react";
import styles from "./styles.module.css";

const Modal = ({ children, visible, setVisible }) => {
  const rootClasses = [styles.myModal];
  if (visible) {
    rootClasses.push(styles.active);
  }

  return (
    <div onClick={() => setVisible(false)} className={rootClasses.join(" ")}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={styles.myModalContent}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
