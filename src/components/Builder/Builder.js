import React, { Component } from "react";
import Current from "../Current/Current";
import MenuBuilder from "../MenuBuilder/MenuBuilder";
import style from "./style.module.css";

class Builder extends Component {
  state = {
    foods: [
      {
        ner: "dessert",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
      {
        ner: "burger",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        ner: "sandwich",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/1600711/pexels-photo-1600711.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        ner: "taco",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/9095726/pexels-photo-9095726.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        ner: "pizza",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
      {
        ner: "pizza2",
        price: 1.3,
        imgUrl:
          "https://images.pexels.com/photos/1260968/pexels-photo-1260968.jpeg?auto=compress&cs=tinysrgb&w=1600",
      },
    ],
  };
  render() {
    return (
      <div className={style.container}>
        <MenuBuilder foods={this.state.foods} />
        <Current foods={this.state.foods} />
      </div>
    );
  }
}

export default Builder;
