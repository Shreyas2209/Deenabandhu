import React from "react";
import "./Gallery.css";

const Data = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU4evoe2ksM9ZwnNHNp38xgI0ropeamXF5Q&usqp=CAU",
    title: "Children",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRoQ3fjzVI87_98gXyBN11W0xGlDBZB967Sw&usqp=CAU",
    title: "Boy's Home",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcU4evoe2ksM9ZwnNHNp38xgI0ropeamXF5Q&usqp=CAU",
    title: "Dheenadandhu",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRimqoLg1k2NjkX6OaBsw_oE2Y4j34eGpIDTA&usqp=CAU",
    title: "Girl's Home",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjR-xbU0jR9bHs33y3RVwAh6xd7ghAimEcIQ&usqp=CAU",
    title: "Infrastructue",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXy0PVTj1PRxlBIgW2bzNjZ1r0p6myTq_Nxw&usqp=CAU",
    title: "Others",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <div className="galleryContainer">
        <h2 className="galleryHead">GALLERY</h2>
        <div className="galleryCards">
          {Data.map((data) => (
            <div className="galleryImages">
              <img src={data.image} alt="" />
              <h3>{data.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
