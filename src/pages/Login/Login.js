import React from "react";
import Logo from "../../img/Logo.png";
const Login = () => {
  return (
    <div className="Login">
      <div className="Login_Header">
        <img className="Login_Logo" src={Logo} alt="imagen"/>
      </div>

      <div className="Login_Box">
        <h2>Inicia sesión</h2>
        <div className="Login_Form">
          <div className="Login_Inputs">
            <input type="text" placeholder="Email o numero de telefono" />
            <input type="text" placeholder="Contraseña" />
            <button>Iniciar Sesion</button>
          </div>

          <div className="Login_HelpButtons">
            <span>
              <label>
                <input type="checkbox" />
                <span>Recuerdame</span>
              </label>
            </span>
            <a href="#">¿Necesitas ayuda?</a>
          </div>
        </div>
        <div className="Login_OtherLinks">
          <a href="#"><i class="fab fa-facebook-square"> </i>Iniciar Sesion con Facebook</a>
          <p className="link1">
             <p>¿Primera vez en Netflix?</p> <a href="#">Suscribete ya</a>
          </p>
          <p clasName="link2">
            Esta pagina esta protegida por Google reCAPTCHA para comprobar que no
            eres un robot.<a href="#">Más info</a>
          </p>
        </div>
      </div>

      <div className="Login_Footer">
        <p className="Login_LeadedText">¿Preguntas? Llama al 1+(408)600-1718 (USA)</p>
        <div className="Login_links">
          <a href="#">Preguntas frecuentes</a>
          <a href="#">Preferencias de cookies</a>
          <a href="#">Centro de ayuda</a>
          <a href="#">Informacion corporativa</a>
          <a href="#">Terminos de uso</a>
          <a href="#">Privacidad</a>
        </div>
        <select name="languages" className="Login_OptionsBox">
          <option value="">Español</option>
          <option value="">Ingles</option>
        </select>
        
      </div>
    </div>
  );
};

export default Login;
