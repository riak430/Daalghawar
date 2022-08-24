import React from "react";
import stylee from "./style.module.css";
import CurrentFoods from "../CurrentFood/CurrentFood";

function CurrentOrder(props) {
  const w = [];
  props.foods.map((el, i) => {
    w.push(
      <CurrentFoods
        ImgUrl={el.imgUrl}
        key={el.ner + i}
        ner={el.ner}
        // price={el.price}
      />
    );
  });
  return <div className={stylee.www}>{w}</div>;
}

export default CurrentOrder;
