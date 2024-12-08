import React from "react";
import styles from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles["profile-container"]}>
      <div className={styles["profile-header"]}>
        <img
          src={image}
          alt="User avatar"
          className={styles["profile-avatar"]}
        />
        <p className={styles["profile-name"]}>{name}</p>
        <p className={styles["profile-tag"]}>@{tag}</p>
        <p className={styles["profile-location"]}>{location}</p>
      </div>
      <ul className={styles["profile-stats"]}>
        <li className={`${styles["profile-stat-item"]} ${styles["profile-r-style"]}`}>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles["profile-stat-item"]}>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={`${styles["profile-stat-item"]} ${styles["profile-l-style"]}`}>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
