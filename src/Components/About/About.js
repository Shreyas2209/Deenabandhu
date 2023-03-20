import TabMobile from "./MobileComponent/TabMobile";
import TabsDesktop from "./Desktop tab/TabsDesktop";
import React, { useState, useEffect } from "react";

function About() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1000);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 1000);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      {isMobile ? <TabMobile></TabMobile> : <TabsDesktop></TabsDesktop>}
    </div>
  );
}

export default About;
