import React from "react";
import "../css/header.css"; // importo header.css para darle estilos a los elementos
import LOGO "../image/starbucks.png"; // importo las imagenes que utilizamos en el header
// ¿Porque en la tarea importa el LOGO? Si ya me tira error. 
import BtnHeader from "./BtnHeader"; // importo el componente BtnHeader

// Creo el componente Header, y envio los props del componente BtnHeader
// (no entendi "y envio los props del BtnHeader esta queriendo decir que en este componente los recibe?", y que son los props?)
const Header = () => {
  return (
    <header className="header">
      <div className="header__container-logo">
        <img className="header__logo" src={LOGO} alt="logo" />
      </div>
      <nav className="header__nav">
        <BtnHeader class={"header__nav-link"} content={"Inicio"} href={"#"} />
        <BtnHeader class={"header__nav-link"} content={"Cafe"} href={"#"} />
        <BtnHeader class={"header__nav-link"} content={"Delivery"} href={"#"} />
        <BtnHeader
          class={"header__nav-link"}
          content={"Sobre Nosotros"}
          href={"#"}
        />
      </nav>
      <div className="header__container-login">
        <i className="header__user-icon bi bi-person-cicle"></i>
      </div>
      <i className="header__icon bi bi-list"></i>
    </header>
  );
};

export default Header;
