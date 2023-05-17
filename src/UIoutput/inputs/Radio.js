import React, { useEffect } from "react";
import "../../App.css";

const Radio = ({ Arr, radioval , setRadioval }) => {
  console.log(Arr)
  useEffect(() => {
    document.getElementsByName("sizeBy").forEach((item) => {
      item.addEventListener("click", () => {
        setRadioval(item.value);
      });
    });
  });  
  

  const showArr = (Arr) =>{
    for(let i=0 ; i<Arr.length ; i+=2){
      return(
        <div className="radio">
        <input
          type="radio"
          name="sizeBy"
          value={Arr[i].label}
          id={Arr[i].label}
          defaultChecked={i===0 ? true : false}
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
