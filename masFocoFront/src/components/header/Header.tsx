import React from "react";
import Button from "../utils/button/PageNavButton/PageNavButton";
import NarrowLogo from "../utils/logo/narrow/narrowLogo.js";
import WideLogo from "../utils/logo/wide/wideLogo.js";
import LoginButton from "../utils/button/AccessButton/AccessButton";
import "./Header.css";

interface ElementosComunesProps {
  isWide: boolean;
  children?: React.ReactNode;
}

interface HeaderProps {
  page: string;
  isWide: boolean;
}

function ElementosComunes(props: ElementosComunesProps) {
  return (
    <header>
      <div className="header-logo-container">
        {props.isWide ? <WideLogo /> : <NarrowLogo />}
      </div>
      <div className="header-container">{props.children}</div>
    </header>
  );
}

const Header = (props: HeaderProps) => {
  const { page, isWide } = props;

  const renderButtons = (activePage: string) => {
    return (
      <div className="header-links">
        <Button
          value="Home"
          className={activePage === "Home" ? "active-page" : "nav-button"}
        />
        <Button
          value="About us"
          className={activePage === "About us" ? "active-page" : "nav-button"}
        />
        <Button
          value="Reports"
          className={activePage === "Reports" ? "active-page" : "nav-button"}
        />
      </div>
    );
  };

  switch (page) {
    case "Home":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("Home")}
        </ElementosComunes>
      );
    case "About us":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("About us")}
          <div className="linea"></div>
          <LoginButton text="Login" color="#3C85DB" />
        </ElementosComunes>
      );
    case "Reports":
      return (
        <ElementosComunes isWide={isWide}>
          {renderButtons("Reports")}
        </ElementosComunes>
      );
    default:
      return null; // Handle unknown page gracefully
  }
};

export default Header;
