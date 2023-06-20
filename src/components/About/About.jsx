import "./About.css";
import imgAbout from "../../assets/about.svg";
const About = () => {
  return (
    <>
      <section className="about-container">
        <div className="div-text-about">
            <h2 className="title-about">
                Soy Coach Ontológico, y facilitadora del eneagrama de la personalidad
            </h2>
            <p className="text-about">
                Me gustaría acompañarte a alcanzar ese &quot;darte cuenta&quot; de patrones y creencias limitantes y también de tus potencialidades para que las pongas a tu favor y asi logres tu mejor versión en bienestar, equilibrio y Armonías.
            </p>
        </div>
        <div className="container-image-about">
          <img className="image-about" src={imgAbout} alt="imgAbout" />
        </div>
      </section>
    </>
  );
};

export default About;
