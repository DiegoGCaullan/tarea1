import React from "react";
import "../css/header.css";

// Creamos el componente BtnHeader con sus props
// ¿Que son los props? (lo busque en la definicion de las diapositivas pero no lo entendi)

const BtnHeader = (props) => {
  return (
    <a className={props.class} href={props.href}>
      {props.content}
    </a>
  );
};

export default BtnHeader;
