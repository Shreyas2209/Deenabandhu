import React from "react";
import "./Card.css";

const Data = [
  {
    image:
      "https://images.unsplash.com/photo-1618570624585-43156608a47c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8Y2hpbGQlMjBwbGF5aW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Lorem ipsum ",
    para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus inventore fugit officia voluptatum quaerat, maiores ipsum natus hic vero incidunt optio ex sint atque.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500471929063-235c721eedf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNoaWxkJTIwcGxheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Lorem ipsum ",
    para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus inventore fugit officia voluptatum quaerat, maiores ipsum natus hic vero incidunt optio ex sint atque.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500471929063-235c721eedf6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODJ8fGNoaWxkJTIwcGxheWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    title: "Lorem Ipsum",
    para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus inventore fugit officia voluptatum quaerat, maiores ipsum natus hic vero incidunt optio ex sint atque.",
  },
];

function Cards() {
  return (
    <>
      {Data.map((data) => {
        return (
          <div className="cardContainer">
            <img className="cardImages" src={data.image} alt=""></img>
            <h2 className="cardTitle">{data.title}</h2>
            <p className="cardInfo">{data.para}</p>
            <button className="cardButton">View More</button>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
