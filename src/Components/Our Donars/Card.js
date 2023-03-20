import React from "react";
import "./Card.css";

const Data = [
  {
    id: 1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU",
    name: "Cat",
  },
  {
    id: 2,
    img: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
    name: "Fox",
  },
  {
    id: 3,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    name: "Bird",
  },
  {
    id: 4,
    img: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Gull_portrait_ca_usa.jpg",
    name: "Bird",
  },
  {
    id: 5,
    img: "https://static.fotor.com/app/features/img/aiimage/scenes/a%20realistic%20fox%20in%20the%20lake%20generated%20by%20ai%20image%20creator.png",
    name: "Fox",
  },
  {
    id: 6,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIsmpJQm0OTBcGyY-Y3ECq4UMpN2lAcagoQ&usqp=CAU",
    name: "Cat",
  },
];

const Card = () => {
  return (
    <>
      {Data.map((data) => {
        return (
          <div className="cardmain">
            <img src={data.img} alt="" className="image"></img>
            <p className="para">{data.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Card;
