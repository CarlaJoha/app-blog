import "./Testimonios.css";
import imgSection from "../../assets/19.jpg";

const Testimonios = () => {
  return (
    <>
      <section className="section-container">
        <div className="container-image-section">
          <img className="image-section" src={imgSection} alt="imgSection" />
        </div>
        <div className="div-text-section">
          <h2 className="title-section">HABLO DE 3 COSAS QUE ME APASIONAN</h2>
          <ul className="lista-section">
            <li>Autoconocimiento</li>
            <li>Crecimiento Personal</li>
            <li>Transformación</li>
          </ul>
          <p className="text-section">
            El autoconocimiento no es un plato fácil de digerir, ya que verás
            cosas de ti que tal vez no te gusten o te cueste reconocer pero es
            muy nutritivo pues una vez que te conoces te puedes convertir en tu
            propio genio.
          </p>
        </div>
      </section>
    </>
  );
};

export default Testimonios;
