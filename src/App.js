import React, { useEffect, useState } from "react";
import "./App.css";
import Data from "./jsondata/data";
import Formui from "./UIoutput/Formui";

function App() {
  const [json, setJson] = useState(null);

  const isJson = (str) => {
    try {
      JSON.parse(str);
    } catch (e) {
      return false;
    }
    return true;
  };

  useEffect(() => {}, [json]);

  return (
    <div className="App">
      <div className="jsonfield">
        <h1 className="title">UI Schema</h1>
        <Data json={json} setJson={setJson} />
      </div>
      <div className="uifield">
        <h1 className="title">Form Output</h1>
        {isJson(json) === true ? <Formui json={JSON.parse(json)} /> : <div className="forms"></div>}
      </div>
    </div>
  );
}

export default App;
