import React from "react";

const NumberButton = props => {
  return (
    <button
      className="number-button"
      onClick={() => props.addNumber(props.text)}
    >
      {console.log(props)}

      {props.text}
    </button>
  );
};

export default NumberButton;
