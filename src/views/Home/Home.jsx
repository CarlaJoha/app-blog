import PropTypes from 'prop-types';
import Carousel from "../../components/Carousels/Carousel";
import About from "../../components/About/About";
import Testimonios from "../../components/Testimonios/Testimonios";
import { SliderData } from "../../components/Carousels/SliderData";

const Home = () => {
  // console.log("Home");
  return (
    <>

      <Carousel slides={SliderData} />


      <About />
 

      <Testimonios />

    </>
  );
};
Home.propTypes = {
  slides : PropTypes.array
}
export default Home;
