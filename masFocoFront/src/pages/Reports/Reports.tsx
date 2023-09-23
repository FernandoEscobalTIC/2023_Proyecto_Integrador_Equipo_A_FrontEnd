import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// @ts-ignore
import logo from "../../assets/logo.png";
import React from "react";
import LeftContainer from "../../components/left-container/LeftContainer";
import "./Reports.css";
import Report from "../../components/utils/report/Report";
function Reports(props: any) {
  return (
    <>
      <Header page="Reports" />
      <div className="reports-content">
        <LeftContainer valor="Reports" />
        <div className="reports-view">
          <Report urgency={4} />
          <Report urgency={3} />
          <Report urgency={3} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={2} />
          <Report urgency={1} />
          <Report urgency={1} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reports;
