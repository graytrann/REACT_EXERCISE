import React, { useState } from "react";
import data from "./data";
import styles from "./mystyle.module.css";
import Glass from "./Glass";

console.log(data);
export default function Glasses() {
  const [imgUrl, setImgUrl] = useState("./img/v1.png");
  const [name, setName] = useState("GUCCI G8850U");
  const [price, setPrice] = useState(30);

  const handleChangeGlass = (name) => {
    switch (name) {
      case "GUCCI G8850U":
        setImgUrl("./img/v1.png");
        setName("GUCCI G8850U");
        setPrice(30);
        break;
      case "GUCCI G8759H":
        setImgUrl("./img/v2.png");
        setName("GUCCI G8759H");
        setPrice(50);
        break;
      case "DIOR D6700HQ":
        setImgUrl("./img/v3.png");
        setName("DIOR D6700HQ");
        setPrice(30);
        break;
      case "DIOR D6005U":
        setImgUrl("./img/v4.png");
        setName("DIOR D6005U");
        setPrice(70);
        break;
      case "PRADA P8750":
        setImgUrl("./img/v5.png");
        setName("PRADA P8750");
        setPrice(40);
        break;
      case "PRADA P9700":
        setImgUrl("./img/v6.png");
        setName("PRADA P9700");
        setPrice(60);
        break;
      case "FENDI F8750":
        setImgUrl("./img/v7.png");
        setName("FENDI F8750");
        setPrice(80);
        break;
      case "FENDI F8500":
        setImgUrl("./img/v8.png");
        setName("FENDI F8500");
        setPrice(100);
        break;
      case "FENDI F4300":
        setImgUrl("./img/v9.png");
        setName("FENDI F4300");
        setPrice(60);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.glasses_layout}>
      <h1>
        {/* <div className="text-center text-white h-25" style={"width: 120px; background-color: rgba(0,0,255,.1)"}>TRY GLASSES APP ONLINE</div> */}
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "rgba(0,0,255,.1)" }}
        >
          TRY GLASSES ONLINE
        </div>
      </h1>
      <div className={styles.glasses_model}>
        <img src="./img/model.jpg"></img>
        <div className={styles.glasses_of_model}>
          <img src={imgUrl}></img>
          <p className={styles.glasses_name}>
            {name} - {price}$
          </p>
        </div>
      </div>
      <div className={styles.glasses}>
        <div className="container mt-5">
          <div className={styles.glasses_container}>
            {/* <div className={styles.glasses_element}>
              <img src="./img/g1.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g2.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g3.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g4.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g5.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g6.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g7.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g8.jpg"></img>
            </div>
            <div className={styles.glasses_element}>
              <img src="./img/g9.jpg"></img>
            </div> */}
            <Glass onChangeGlass={handleChangeGlass} />
          </div>
        </div>
      </div>
    </div>
  );
}
