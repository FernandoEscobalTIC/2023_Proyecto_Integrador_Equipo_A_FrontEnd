import React, { useEffect, useState } from "react";
import Report from "../../utils/report/Report";
const CreateReport = (props: any) => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    async function fetchReports() {
      const response = await fetch("http://localhost:3000/reports");
      const data = await response.json();
      setReports(data);
      console.log(data);
    }
    fetchReports();
  }, []);
  return (
    <>
      {reports.map((report: any, index) => (
        <Report
          titulo={report.titulo}
          descripcion={report.descripcion}
          prioridad={report.prioridad}
          usuario={report.usuario}
        />
      ))}
    </>
  );
};

export default CreateReport;
