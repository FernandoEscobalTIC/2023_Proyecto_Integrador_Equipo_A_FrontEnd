import React from "react";
// @ts-ignore
import ventanaRota from "../../../assets/ventana-rota.png";
// @ts-ignore
import imagenRemitenteTest from "../../../assets/imagen-remitente.jpeg";
import "./Report.css";
function UrgencyLevel(props: any) {
  const prioridad = props.prioridad;
  switch (prioridad) {
    case "Low":
      return (
        <div className="low-urgency-box">
          <p className="urgency-span">Low</p>
        </div>
      );
    case "Medium":
      return (
        <div className="medium-urgency-box">
          <p className="urgency-span">Medium</p>
        </div>
      );
    case "High":
      return (
        <div className="high-urgency-box">
          <p className="urgency-span">High</p>
        </div>
      );
    case "Critical":
      return (
        <div className="critical-urgency-box">
          <p className="urgency-span">CRITICAL</p>
        </div>
      );
  }
}

//  <Report
//    titulo={report.titulo}
//    descripcion={report.descripcion}
//    prioridad={report.prioridad}
//    usuario={report.usuario}
//   />

const Report = (props: any) => {
  const prioridad = props.prioridad;
  const titulo = props.titulo;
  const descripcion = props.descripcion;
  const usuario = props.usuario;
  return (
    <div className="card">
      <div className="img">
        <div className="remitente">
          <img src={imagenRemitenteTest} alt="Imagen del remitente" />
          <p>{usuario}</p>
        </div>
        <img src={ventanaRota} alt="Ventana Rota" />
      </div>

      <div className="card-content">
        <div className="card-text">
          <h3>{titulo}</h3>
          <p>{descripcion}</p>
        </div>
        <UrgencyLevel prioridad={prioridad} />
      </div>
    </div>
  );
};

export default Report;
