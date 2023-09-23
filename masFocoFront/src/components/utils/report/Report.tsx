import React from "react";
// @ts-ignore
import ventanaRota from "../../../assets/ventana-rota.png";
// @ts-ignore
import imagenRemitenteTest from "../../../assets/imagen-remitente.jpeg";
import "./Report.css";
const nombreRemitenteTest = "Bruno Avellaneda";
function UrgencyLevel(props: any) {
  const urgency = props.urgency;
  switch (urgency) {
    case 1:
      return (
        <div className="low-urgency-box">
          <p className="urgency-span">Low</p>
        </div>
      );
    case 2:
      return (
        <div className="medium-urgency-box">
          <p className="urgency-span">Medium</p>
        </div>
      );
    case 3:
      return (
        <div className="high-urgency-box">
          <p className="urgency-span">High</p>
        </div>
      );
    case 4:
      return (
        <div className="critical-urgency-box">
          <p className="urgency-span">CRITICAL</p>
        </div>
      );
  }
}
const Report = (props: any) => {
  const urgency = props.urgency;
  const nombreRemitente = props.nombreRemitente;
  const imagenRemitente = props.imagenRemitente;
  return (
    <div className="card">
      <div className="img">
        <div className="remitente">
          <img src={imagenRemitenteTest} alt="Imagen del remitente" />
          <p>{nombreRemitenteTest}</p>
        </div>
        <img src={ventanaRota} alt="Ventana Rota" />
      </div>

      <div className="card-content">
        <div className="card-text">
          <h3>Ventana rota</h3>
          <p>Ventana que da al patio rota por balonazo en 3ro A</p>
        </div>
        <UrgencyLevel urgency={urgency} />
      </div>
    </div>
  );
};

export default Report;
