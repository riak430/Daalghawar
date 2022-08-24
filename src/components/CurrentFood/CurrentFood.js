import React from "react";
import styl from "./style.module.css";
const CurrentFood = (props) => {
  return (
    <div className={styl.foode}>
      <span>
        <h1>{props.ner}</h1>
        <p>{props.price}</p>
      </span>
      <img
        src={props.ImgUrl}
        alt="food photo"
        width="100px"
        height="100px"
      ></img>
      <button className={styl.button}>Нэмэх</button>
      <button className={styl.button}>Хасах</button>
    </div>
  );
};
export default CurrentFood;
