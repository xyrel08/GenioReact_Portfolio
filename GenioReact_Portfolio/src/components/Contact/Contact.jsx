import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
        <a href="mailto:xyrelgenio08@gmail.com">
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          </a>
          <a href="mailto:xyrelgenio08@gmail.com">xyrelgenio08@gmail.com</a>
        </li>
        <li className={styles.link}>
          <a href="https://www.linkedin.com/in/xyrel-genio" target="_blank" >
          <img 
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          /></a>
          
          <a href="https://www.linkedin.com/in/xyrel-genio" target="_blank">www.linkedin.com/in/xyrel-genio</a>
        </li>
        <li className={styles.link}>
        <a href="https://www.github.com/xyrel08" target="_blank">
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          </a>
          <a href="https://www.github.com/xyrel08" target="_blank">github.com/xyrel08</a>
        </li>
      </ul>
    </footer>
  );
};