/* eslint no-use-before-define: 0 */
import React, { useState } from "react";
import Text from "./inputs/Text";
import Headings from "./inputs/Headings";
import Radio from "./inputs/Radio";
import Dropdown from "./inputs/Dropdown";
import Checkbox from "./inputs/Checkbox";
import Toggle from "./inputs/Toggle";

const Formui = ({ json }) => {
  const [adv1, setAdv1] = useState(false);
  const [radioval , setRadioval] =useState("");

  return (
    <>
      {json !== null ? (
        <div className="forms">
          <div className="formlayout">
            <h3> New Recepie </h3>
            <hr />
            {json.map((item) => (
              <div className="template">
                {item.uiType === "Group" ? (
                  <>
                    <Headings heading={item.label} req={item.required} />
                    {item.subParameters.map((item1) => (
                      <div>
                        {item1.uiType === "Radio" ? (
                          <>
                            <Radio Arr={item1.validate.options} radioval={radioval} setRadioval={setRadioval} />
                          </>
                        ) : null}
                        {item1.uiType === "Ignore" ? (item1.subParameters.map((item2)=> (
                          <>
                            {radioval === item1.label ?
                              (<>{item2.uiType === "Select" ? (<Dropdown Title={item2.label} Arr={item2.validate.options} />) : null}
                              {item2.uiType === "Input" ? (<Text Title={item2.label} placeholder={item2.placeholder} />) : null}
                              {item2.uiType === "Switch" ? (<Checkbox item={item2} />) : null}</>) : null }
                          </>
                        ))) : null }
                        {item1.uiType === "Switch" ? (
                          <>
                            <Checkbox item={item1} />
                            <Toggle
                              label={
                                adv1 === true
                                  ? "Hide Advanced fields"
                                  : "Show Advanced fields"
                              }
                              adv={adv1}
                              onColor="#6f3ec0"
                              handleToggle={() => setAdv1(!adv1)}
                              id={item1.label}
                            />
                          </>
                        ) : null}
                        {item1.uiType === "Select" ? (
                          <>
                            <Dropdown
                              Title={item1.label}
                              Arr={item1.validate.options}
                            />
                          </>
                        ) : null}
                      </div>
                    ))}
                  </>
                ) : null}
                {item.uiType === "Input" ? (
                  <Text Title={item.label} Placeholder={item.placeholder} />
                ) : null}
                {item.uiType === "Select" ? (
                  <Dropdown Title={item.label} Arr={item.validate.options} />
                ) : null}
                {item.uiType === "Radio" ? (
                  <Radio Arr={item.validate.options} radioval={radioval} setRadioval={setRadioval}/>
                  ) : null}
              </div>
            ))}

            <div className="ToggleOverlay">
              <div></div>
              <div className="Btns">
                <button type="submit" className="Cancelbtn">
                  Cancel
                </button>
                <button type="submit" className="Submitbtn">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Formui;
