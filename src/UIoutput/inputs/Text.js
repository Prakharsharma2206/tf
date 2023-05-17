import React from "react";

const Text = ({Title , Placeholder}) => {
  return (
    <div className="text">
      <h4 className="label-text">
        {Title} <span className="req">*</span>
      </h4>
      <input
        type="text"
        placeholder={Placeholder}
        className="input-text"
      />
    </div>
  );
};

export default Text;
