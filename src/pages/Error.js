import React from "react";
import { Link } from "react-router-dom";

import styles from "./Error.module.css";

export default function Error() {
  return (
    <div className={styles["error-container"]}>
      <h2>This page doesn't exist</h2>
      <Link to="/">
        <h5>Back Home</h5>
      </Link>
    </div>
  );
}
