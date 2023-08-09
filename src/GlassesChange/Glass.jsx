import React from "react";
import data from "./data";
import styles from "./mystyle.module.css";

export default function Glass({ onChangeGlass }) {
  return data.map((glass) => {
    return (
      <div
        className={styles.glasses_element}
        onClick={() => onChangeGlass(glass.name)}
      >
        <img src={glass.url}></img>
        
      </div>
    );
  });
}
