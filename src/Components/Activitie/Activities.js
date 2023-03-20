import React from "react";
import Cards from "./Card";
import "./Activities.css";

const Activities = () => {
  return (
    <div className="activities">
      <h2 className="cardHead">ACTIVITIES</h2>
      <p className="cardPara">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
        consequatur, pariatur quo officia tempora magnam ipsum perferendis
        suscipit assumenda odio dolores voluptatibus, aut laudantium sequi ipsa
        laboriosam deserunt deleniti similique! consequatur, pariatur quo
        officia tempora magnam ipsum perferendis suscipit assumenda odio dolores
        voluptatibus, aut laudantium sequi ipsa quo officia tempora magnam ipsum
        perferendis suscipit assumenda odio dolores
      </p>
      <div className="Cards">
        <Cards></Cards>
      </div>
    </div>
  );
};

export default Activities;
