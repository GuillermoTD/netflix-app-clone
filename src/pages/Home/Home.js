import React, { useState } from "react";
import Logo from "../../img/Logo.png";
import kid_image from "../../img/kid_image.png";
import devices from "../../img/device-pile.png";
import tv from "../../img/tv.png";
import mobile from "../../img/mobile-0819.jpg";

const Home = () => {
  const [active, setActive] = useState(false);
  const handleDropDown = (e) => {
    // setActive(!active);
    const dropdowns = document.querySelectorAll('.Home_DropDown')
    const selectedDropDown = dropdowns.filter(element => element === e.target)
    selectedDropDown.classList.toggle("active")
    console.log('elemento clickeado')
  };
  const targetedElement = (e)=>{
    const Element = e.target;

  }

  return (
    <div className="Home">
      <div className="Home_Hero">
        <div className="Home_Header">
          <img src={Logo} alt="Logo" />
          <div className="Home_buttons">
            <select>
              <option value="Español" key="">
                Español
              </option>
              <option value="ingles" key="">
                Ingles
              </option>
            </select>
            <button>Iniciar sesión</button>
          </div>
        </div>
        <div className="Home_HeroDescription">
          <h1>Peliculas y series ilimitadas y mucho mas.</h1>
          <h3>Disfruta donde quieras. Cancela cuando quieras</h3>
          <p>
            ¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o
            reiniciar tu membresía de Netflix.
          </p>
          <div className="Home_Input">
            <input type="text" placeholder="Email" />
            <button>Comenzar</button>
          </div>
        </div>
      </div>
      {/* section 1 */}
      <section className="Home_Section">
        <div className="Home_SectionDescription">
          <h2>Disfruta en tu TV.</h2>
          <p>
            Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV,
            reproductores de Blu-ray y más.
          </p>
        </div>
        <img src={tv} alt="img" className="Home_SectionImage" />
      </section>

      {/* section 2 */}
      <section className="Home_Section segundo">
        <img src={mobile} alt="img" className="Home_SectionImage" />
        <div className="Home_SectionDescription">
          <h2>Descarga tus series para verlas offline.</h2>
          <p>Guarda tu contenido favorito y tendrás siempre algo para ver.</p>
        </div>
      </section>

      {/* section 3 */}
      <section className="Home_Section">
        <div className="Home_SectionDescription">
          <h2>Disfruta donde quieras.</h2>
          <p>
            Películas y series ilimitadas en tu teléfono, tablet, computadora y
            TV sin costo extra.
          </p>
        </div>
        <img src={devices} alt="img" className="Home_SectionImage" />
      </section>

      {/* section 4 */}
      <section className="Home_Section">
        <img src={kid_image} alt="img" className="Home_SectionImage" />
        <div className="Home_SectionDescription">
          <h2>Crea perfiles para niños.</h2>
          <p>
            Los niños vivirán aventuras con sus personajes favoritos en un
            espacio diseñado exclusivamente para ellos, sin costo con tu
            membresía.
          </p>
        </div>
      </section>

      <div className="Home_FAQ">
        <h2>Preguntas frecuentes</h2>

        <div className="Home_DropDownBox">
            {/* dropdown1 */}
          <div className="Home_DropDown">
            <div
              className="Home_DropDown_Title"
              onClick={(e) => e.target.classList.toggle("active")}
            >
              <p className="close open">¿Qué es Netflix?</p>
              <span></span>
            </div>
            <div className="Home_DropDown_Content">
              <p>
                Netflix es un servicio de streaming que ofrece una gran variedad
                de películas, series y documentales premiados en casi cualquier
                pantalla conectada a internet.
              </p>
              <p>
                Todo lo que quieras ver, sin límites ni comerciales, a un costo
                muy accesible. Siempre hay algo nuevo por descubrir, ¡y todas
                las semanas se agregan más películas y series!
              </p>
            </div>
          </div>
          {/* dropdown2 */}

 
          {/* dropdown3 */}

        

          {/* dropdown4 */}
         

          {/* dropdown5 */}
         
        </div>
      </div>
      <footer className="Home_Footer">
        <h3>¿Preguntas? Llama al +1 (408) 600-1718 (USA)</h3>
        <div className="Home_Footer_Links">
          <a href="#">Preguntas frecuente</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Cuenta</a>
          <a href="#">Prensa</a>
          <a href="#">Relaciones con inversionistas</a>
          <a href="#">Empleo</a>
          <a href="#">Formas de ver</a>
          <a href="#">Términos de uso</a>
          <a href="#">Privacidad</a>
          <a href="#">Preferencias de cookies</a>
          <a href="#">Información corporativa</a>
          <a href="#">Contáctanos</a>
          <a href="#">Prueba de velocidad</a>
          <a href="#">Avisos legales</a>
          <a href="#">Solo en Netflix</a>
        </div>
        <select>
          <option value="Español" key="">
            Español
          </option>
          <option value="ingles" key="">
            Ingles
          </option>
        </select>
        <p>Netflix República Dominicana</p>
      </footer>
    </div>
  );
};

export default Home;
