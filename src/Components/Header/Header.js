import { useState } from "react";
import classes from "./Header.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SliderData from "./SliderData";

function Header({ slides }) {
  // **********************************header**********************************
  const [navBar, setNavBar] = useState(false);

  const navBarHandler = () => {
    setNavBar(!navBar);
  };

  // ***********************************slider**************************************

  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  return (
    <>
      <div className={classes["landing-section"]}>
        {/* ******************************header**************************** */}
        <div className={classes.header}>
          <div className={classes.logo}>
            <h3>DEENABANDHU</h3>
          </div>
          <div className={classes["nav_icon"]} onClick={navBarHandler}>
            {navBar ? <CloseIcon /> : <MenuIcon />}
          </div>

          <ul
            className={
              navBar ? classes["header_nav_active"] : classes["header_nav"]
            }
          >
            <li className={classes.home}>
              <a href="/">Home</a>
            </li>
            <li className={classes.about}>
              <a href="/">About</a>
            </li>
            <li className={classes.activities}>
              <a href="/">Activities</a>
            </li>
            <li className={classes["get_involved"]}>
              <a href="/">Get Involved</a>
            </li>
            <li className={classes.gallery}>
              <a href="/">Gallery</a>
            </li>
            <li className={classes.contact}>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        {/* ***************************************slider************************ */}

        <section className={classes["slider"]}>
              <div className={classes["left-arrow"]} onClick={prevSlide}>
            <ion-icon name="chevron-back-outline"></ion-icon>
          </div>
          <article className={classes["slide-article"]}>
            <h1 className={classes["article-title"]}>
              {SliderData[current].title}
            </h1>
            <p>{SliderData[current].article}</p>
            <a href="/" className={classes.btn}>
              Donate
            </a>
          </article>
          <div className={classes["right-arrow"]}>
            <ion-icon
              name="chevron-forward-outline"
              onClick={nextSlide}
            ></ion-icon>
          </div>
          {/* *************DOT****************************************** */}
          <div className={classes.dots}>
            {SliderData.map((_, i) => (
              <div
                className={`${classes.dot} ${i === current && classes.active}`}
              ></div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}

export default Header;
