import React from "react";
import { useState } from "react";
import "./TabsDesktop.css";

const TabsDesktop = () => {
  const [Index, setIndex] = useState(0);

  return (
    <>
      <div className="main-section">
        <h1 className="heading">ABOUT</h1>
        <p className="sub_heading">Our Mission | Vision and Plans</p>
        <div className="total-container">
          <div className="container1">
            <button
              className={`btn1 ${Index === 0 ? "active" : null}`}
              onClick={() => {
                setIndex(0);
              }}
            >
              About US
            </button>
            <button
              className={`btn2 ${Index === 1 ? "active" : null}`}
              onClick={() => {
                setIndex(1);
              }}
            >
              History
            </button>
            <button
              className={`btn3 ${Index === 2 ? "active" : null}`}
              onClick={() => {
                setIndex(2);
              }}
            >
              The Founder
            </button>
            <button
              className={`btn4 ${Index === 3 ? "active" : null}`}
              onClick={() => {
                setIndex(3);
              }}
            >
              Vision and Mission
            </button>
            <button
              className={`btn5 ${Index === 4 ? "active" : null}`}
              onClick={() => {
                setIndex(4);
              }}
            >
              Our Mandate
            </button>
            <button
              className={`btn6 ${Index === 5 ? "active" : null}`}
              onClick={() => {
                setIndex(5);
              }}
            >
              Our Plans
            </button>
          </div>
          <div className="container2">
            <div className="tabcontent" hidden={Index !== 0}>
              <img
                className="img1"
                src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
            <div className="tabcontent" hidden={Index !== 1}>
              <img
                className="img1"
                src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
            <div className="tabcontent" hidden={Index !== 2}>
              <img
                className="img1"
                src="https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
            <div className="tabcontent" hidden={Index !== 3}>
              <img
                className="img1"
                src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
            <div className="tabcontent" hidden={Index !== 4}>
              <img
                className="img1"
                src="https://webneel.com/daily/sites/default/files/images/daily/08-2018/1-nature-photography-spring-season-mumtazshamsee.jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
            <div className="tabcontent" hidden={Index !== 5}>
              <img
                className="img1"
                src="https://iso.500px.com/wp-content/uploads/2016/03/stock-photo-142984111-1500x1000.jpg"
                alt="img"
              ></img>
              <h2>About US</h2> <br></br>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur feugiat, lectus non sollicitudin ullamcorper, lorem
                risus viverra dolor, non faucibus ligula orci posuere dolor.
                Fusce faucibus efficitur lorem, ut iaculis lectus venenatis vel.
                Nullam pulvinar consequat nibh at auctor. Donec orci massa,
                mollis ac tellus nec, dignissim faucibus lacus. Nunc metus
                tellus, aliquam et feugiat a, dictum nec eros. Donec placerat
                augue eget velit pellentesque, non sagittis nunc mollis. Nam
                ullamcorper rutrum felis, in elementum odio varius et. Nunc ut
                tempus felis, at viverra elit.
              </p>
              <br></br> <button className="read_more">Read More</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TabsDesktop;
