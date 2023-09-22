/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';
import Button from '../utils/button/PageNavButton/PageNavButton';
import Logo from '../utils/logo/wide/wideLogo.js'
import LoginButton from '../utils/button/AccessButton/AccessButton';
import './Header.css'

function ElementosComunes(props: any) {
  return (

    <header>
      <div className='header-logo-container'>
        <Logo />
      </div>
      <div className="header-container">
        {props.children}


      </div>


    </header >

  );
};

const Header = (props: any) => {
  const page = props.page;
  switch (page) {
    case "Home": {

      return (
        <ElementosComunes>
          <div className='headerLinks'>
            <Button value="Home" className="active-page" />
            <Button value="About us" className="nav-button" onclick="/aboutus" />
            <Button value="Reports" className="nav-button" />
          </div>
        </ElementosComunes>
      )



    }
    case "About us": {
      return (
        <ElementosComunes>
          <div className='headerLinks'>
            <Button value="Home" className="nav-button" />
            <Button value="About us" className="active-page" />
            <Button value="Reports" className="nav-button" />
          </div>
          <div className="linea"></div>
          <LoginButton text="Login" color="#3C85DB" />
        </ElementosComunes>
      )

    }
    case "Reports": {
      return (
        <ElementosComunes>
          <div className='header-links'>
            <Button value="Home" className="nav-button" />
            <Button value="About us" className="nav-button" />
            <Button value="Reports" className="active-page" />
          </div>
          <div className="linea"></div>
          <LoginButton text="Login" color="#3C85DB" />
        </ElementosComunes>
      )
    }
  }
};

export default Header;