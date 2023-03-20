import React, { useState } from "react";
import Data from "./SliderData";
import classes from "./Slider.module.css";

function Slide({ slides }) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <div className={classes["container"]}>
      <h2 className={classes["heading"]}>TESTIMONIALS</h2>
      <section className={classes["slider"]}>
        <div className={classes["left-arrow"]} onClick={prevSlide}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </div>
        <div className={classes["right-arrow"]}>
          <ion-icon
            name="chevron-forward-outline"
            onClick={nextSlide}
          ></ion-icon>
        </div>

        <article className={classes["slide-article"]}>
          <div className="slide-Image">
            <img
              className={classes["article-image"]}
              src={Data[current].image}
              alt=""
            />
          </div>
          <div className={classes["article-info"]}>
            <h1 className={classes["article-title"]}>{Data[current].title}</h1>
            <p className={classes["article-para"]}>{Data[current].article}</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </article>
        <article className={classes["slide-article"]}>
          <div className="slide-Image">
            <img
              className={classes["article-image"]}
              src={Data[current].image}
              alt=""
            />
          </div>
          <div className={classes["article-info"]}>
            <h1 className={classes["article-title"]}>{Data[current].title}</h1>
            <p className={classes["article-para"]}>{Data[current].article}</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </article>
        <article className={classes["slide-article"]}>
          <div className="slide-Image">
            <img
              className={classes["article-image"]}
              src={Data[current].image}
              alt=""
            />
          </div>
          <div className={classes["article-info"]}>
            <h1 className={classes["article-title"]}>{Data[current].title}</h1>
            <p className={classes["article-para"]}>{Data[current].article}</p>
            <span>⭐⭐⭐⭐⭐</span>
          </div>
        </article>
      </section>
      <div className={classes.dots}>
        {Data.map((_, i) => (
          <div
            className={`${classes.dot} ${i === current && classes.active}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slide;
