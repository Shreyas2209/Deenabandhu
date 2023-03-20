import React from "react";
import { useState } from "react";
import "./TabMobile.css";

const TabMobile = () => {
  const [showContainer1, setShowContainer1] = useState(false);
  const [showContainer2, setShowContainer2] = useState(false);
  const [showContainer3, setShowContainer3] = useState(false);
  const [showContainer4, setShowContainer4] = useState(false);
  const [showContainer5, setShowContainer5] = useState(false);
  const [showContainer6, setShowContainer6] = useState(false);

  const handleDiv1Click = () => {
    setShowContainer1(true);
    setShowContainer2(false);
  };

  const handleDiv2Click = () => {
    setShowContainer1(false);
    setShowContainer2(true);
  };
  const handleDiv3Click = () => {
    setShowContainer1(false);
    setShowContainer2(false);
    setShowContainer3(true);
  };
  const handleDiv4Click = () => {
    setShowContainer1(false);
    setShowContainer2(false);
    setShowContainer3(false);
    setShowContainer4(true);
  };
  const handleDiv5Click = () => {
    setShowContainer1(false);
    setShowContainer2(false);
    setShowContainer3(false);
    setShowContainer4(false);
    setShowContainer5(true);
  };
  const handleDiv6Click = () => {
    setShowContainer1(false);
    setShowContainer2(false);
    setShowContainer3(false);
    setShowContainer4(false);
    setShowContainer5(false);
    setShowContainer6(true);
  };
  return (
    <div className="container12">
      <h1 className="heading12">ABOUT</h1>
      <p className="sub_heading12">Our Mission | Vision and Plans</p>
      <button className="btn1" onClick={handleDiv1Click}>
        About Us
      </button>
      {showContainer1 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
      <button className="btn2" onClick={handleDiv2Click}>
        History
      </button>
      {showContainer2 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
      <button className="btn3" onClick={handleDiv3Click}>
        The Founder
      </button>
      {showContainer3 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
      <button className="btn4" onClick={handleDiv4Click}>
        Vision and Mission
      </button>
      {showContainer4 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
      <button className="btn5" onClick={handleDiv5Click}>
        Our Mandates
      </button>
      {showContainer5 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
      <button className="btn6" onClick={handleDiv6Click}>
        Our Plans
      </button>
      {showContainer6 && (
        <div className="tabcontent12">
          <img
            className="img12"
            src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg"
            alt="img"
          ></img>
          <h2>About US</h2> <br></br>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            feugiat, lectus non sollicitudin ullamcorper, lorem risus viverra
            dolor, non faucibus ligula orci posuere dolor. Fusce faucibus
            efficitur lorem, ut iaculis lectus venenatis vel. Nullam pulvinar
            consequat nibh at auctor. Donec orci massa, mollis ac tellus nec,
            dignissim faucibus lacus. Nunc metus tellus, aliquam et feugiat a,
            dictum nec eros. Donec placerat augue eget velit pellentesque, non
            sagittis nunc mollis. Nam ullamcorper rutrum felis, in elementum
            odio varius et. Nunc ut tempus felis, at viverra elit.
          </p>
          <br></br> <button className="read_more">Read More</button>
        </div>
      )}
    </div>
  );
};

export default TabMobile;
