import React from "react";
import Report from "../../utils/report/Report";
const CreateReport = (props: any) => {
  return (
    <>
      <Report urgency={4} />
      <Report urgency={3} />
    </>
  );
};

export default CreateReport;
