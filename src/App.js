import About from "./Components/About/About";
import Activities from "./Components/Activitie/Activities";
import Awards from "./Components/Awards and Achievments/Main";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Image from "./Components/Gallery/Image";
import Involve from "./Components/Get Involved/Involve";
import Header from "./Components/Header/Header";
import SliderData from "./Components/Header/SliderData";
import Donars from "./Components/Our Donars/Main";
import Slide from "./Components/Testimonial/Slider";
import Data from "./Components/Testimonial/SliderData";

function App() {
  return (
    <>
      <Header slides={SliderData} />
      <About />
      <Activities />
      <Involve/>
      <Donars />
      <Slide slides={Data} />
      <Awards />
      <Image/>  
      <Contact />
      <Footer />
    </>
  );
}

export default App;