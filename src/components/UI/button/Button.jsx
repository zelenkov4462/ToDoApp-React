import React from "react";

import styles from "./styles.module.scss";

const Button = ({ cls, children, ...props }) => {
  return (
    <button className={styles[cls]} {...props}>
      {children}
    </button>
  );
};

export default Button;
