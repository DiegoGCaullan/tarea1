import React from "react";

// Creamos el componente Cards para posteriormente utilizarlo
const Cards = (props) => {
  return (
    <div className="cards__card">
      <img className="cards__card-img" src={props.src} alt="card" />
      <div className="cards__container-text">
        <h2 className="cards__card-title">
          {props.title + " "}
          <span className="cards__card-title--yellow">Starbucks</span>
        </h2>
        <p className="cards__card-description">{props.description}</p>
        <br />
        <input className="cards__card-btn" type="button" value="Pruebelo" />
      </div>
      {/* Para solucionar el problema de que algunas cards no tienen el circulo amarillo
      utilizamos un operador ternario "?" en caso de que sea true, mostralo y sino, no lo muestres */}
      {props.circle_estado ? (
        <div className="card__circle">{props.circle}</div>
      ) : null}
    </div>
  );
};

export default Cards;
