import React from "react";
import { Link } from "react-router-dom";
import styles from "./Book.module.css";

export default function Book({ id, title, img }) {
  return (
    <div className={styles["book-container"]}>
      <img src={img} className={styles["book-img"]} alt={title}/>
      <div className={styles["title-container"]}>
        <h2>{title}</h2>
      </div>
      <Link to={`/book/${id}`}>
        <div className={styles["details-link-container"]}>
          <h4>details</h4>
        </div>
      </Link>
    </div>
  );
}
