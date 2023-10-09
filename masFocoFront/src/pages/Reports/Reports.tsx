import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
// @ts-ignore
import logo from "../../assets/logo.png";
import React from "react";
import LeftContainer from "../../components/left-container/LeftContainer";
import "./Reports.css";
import Report from "../../components/utils/report/Report";
import ShowReports from "../../components/reports/showReports/ShowReports";
function Reports(props: any) {
  return (
    <>
      <Header isWide={false} page="Reports" />
      <div className="reports-content">
        <LeftContainer valor="Reports" />
        <div className="reports-view">
          <ShowReports />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reports;
