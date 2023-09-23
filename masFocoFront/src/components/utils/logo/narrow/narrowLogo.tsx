/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './narrowLogo.css'
// @ts-ignore
import logo from '../../../../assets/logo.png';
function narrowLogo() {

  return (
    <div className="logo" id="narrow-logo">
      <img src={logo} alt="Logo" />
      <h1>+FOCO</h1>
    </div>
  )
}

export default narrowLogo
