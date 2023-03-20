import React from "react";
import "./Card.css";

const Data = [
  {
    image:
      "https://images.unsplash.com/photo-1502781252888-9143ba7f074e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Lorem ipsum ",
    para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus inventore fugit officia voluptatum quaerat, maiores ipsum natus hic vero incidunt optio ex sint atqueperferendis   suscipit assumenda odio dolores voluptatibus, aut laudantium sequi ipsalaboriosam deserunt deleniti similique!.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fGNoaWxkcmVufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60xDU9bKzg&usqp=CAU",
    title: "Lorem ipsum ",
    para: "  Lorem ipsum dolor sit amet consectetur adipisicing elit Doloribus inventore fugit officia voluptatum quaerat, maiores ipsum natus hic vero incidunt optio ex sint atque.perferendis suscipit assumenda odio dolores voluptatibus, aut laudantium sequi ipsalaboriosam deserunt deleniti similique!",
  },
];
function Card() {
  return (
    <>
      {Data.map((data) => {
        return (
          <div className="container">
            <img className="cardImage" src={data.image} alt="" />
            <div className="subContainer">
              <h2 className="cardTitle">{data.title}</h2>
              <p className="cardInfo">{data.para}</p>
              <button className="cardButton">Read More</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Card;
