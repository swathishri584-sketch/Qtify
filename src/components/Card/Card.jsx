import React from "react";
import { Chip } from "@mui/material";
import styles from "./Card.module.css";

// type "album" shows follows, type "song" shows likes
function Card({ data, type = "album" }) {
  const { image, title, follows, likes } = data;
  const chipLabel = type === "song" ? `${likes} Likes` : `${follows} Follows`;

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <img src={image} alt={title} loading="lazy" />
        <div className={styles.banner}>
          <Chip label={chipLabel} size="small" className={styles.chip} />
        </div>
      </div>
      <div className={styles.titleWrapper}>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default Card;
