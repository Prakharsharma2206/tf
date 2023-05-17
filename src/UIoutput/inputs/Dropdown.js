import React from "react";

const Text = ({ Title, num, Arr }) => {
  var myArr = [];
  if (Arr) {
    myArr = Arr;
  } else {
    for (let i = 0; i < num; i++) {
      myArr.push(i + 1);
    }
  }

  return (
    <div className="text">
      <h4 className="label-text">
        {Title} <span className="req">*</span>
      </h4>
      <select name="values" id="number" className="Select">
        {myArr.map((item, index) => (
          <option value={item.label} key={index.label} className="Options-select">
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Text;
