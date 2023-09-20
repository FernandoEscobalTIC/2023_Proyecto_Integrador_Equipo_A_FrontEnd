/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './wideLogo.css';
import React from 'react';
// @ts-ignore
import logo from '../../../../assets/logo.png';
function wideLogo() {

  return (
    <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>+FOCO | EL FOCO DONDE IMPORTA</h1>
    </div>
  )
}

export default wideLogo
