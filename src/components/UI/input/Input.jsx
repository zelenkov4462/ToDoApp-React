import React from "react";

import styles from "./styles.module.scss";

const Input = ({ cls, ...props }) => {
  return <input className={styles[cls]} {...props} />;
};

export default Input;
