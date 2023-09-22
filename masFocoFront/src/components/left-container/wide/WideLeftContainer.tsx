/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import Login from "../../homeWideContainer/login/Login.js";
import Register from "../../homeWideContainer/register/Register.js";
import Communities from "../../homeWideContainer/comunity/Comunity.js";
import "./WideLeftContainer.css";
function WideLeftContainer(props: any) {
  const valor = props.valor;
  switch (valor) {
    case "Login": {
      return (
        <div className="left-container">
          <Login />
        </div>
      )
    }
    case "Register": {
      return (
        <div className="left-container">
          <Register />
        </div>
      )

    }
    case "Communities": {
      return (
        <div className="left-container">
          <Communities />
        </div>
      )
    }
  }
}
export default WideLeftContainer;
