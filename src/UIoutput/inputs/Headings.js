import React from "react";

const Headings = ({ heading, req }) => {
  return (
    <div className="heading">
      <div className="headinglayout">
        <h4>
          {" "}
          {heading} {req === "1" ? <span className="req">*</span> : <></>}{" "}
        </h4>
        <hr />
      </div>
    </div>
  );
};

export default Headings;
