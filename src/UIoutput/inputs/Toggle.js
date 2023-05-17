import React from "react";

const Toggle = ({ adv, handleToggle, label, onColor, id, additional }) => {
  return (
    <div className="ToggleOverlay">
      <div className="Toggle">
        {" "}
        <h4>{label}</h4>
        <input
          checked={adv}
          onChange={handleToggle}
          className="react-switch-checkbox"
          id={id}
          type="checkbox"
        />
        <label
          style={{ background: adv && onColor }}
          className="react-switch-label"
          htmlFor={id}
        >
          <span className={`react-switch-button`} />
        </label>
      </div>
      {additional === 1 ? (
        <div className="Btns">
          <button type="submit" className="Cancelbtn">Cancel</button>
          <button type="submit" className="Submitbtn">Submit</button>
        </div>
      ) : null}
    </div>
  );
};

export default Toggle;
