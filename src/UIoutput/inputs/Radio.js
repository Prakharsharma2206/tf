import React, { useEffect } from "react";
import "../../App.css";

const Radio = ({ Arr, radioval , setRadioval }) => {

  useEffect(() => {
    // document.getElementsByName("sizeBy").forEach()=>{

    // }

    // Value of checked radio button in react
  }, [])
  

  const showArr = (Arr) =>{
    for(let i=0 ; i<Arr.length ; i+=2){
      return(
        <div className="radio">
        <input
          type="radio"
          name="sizeBy"
          value={Arr[i].label}
          id={Arr[i].label}
          defaultChecked
        />
        <label htmlFor={Arr[i].label} >{Arr[i].label}</label>

        <input
          type="radio"
          name="sizeBy"
          value={Arr[i+1].label}
          id={Arr[i+1].label}
        />
        <label htmlFor={Arr[i+1].label} >{Arr[i+1].label}</label>
      </div>
      );
    }
  }

  return (
    <div className="universalradio">
      {showArr(Arr)}
    </div>
  );
};

export default Radio;
