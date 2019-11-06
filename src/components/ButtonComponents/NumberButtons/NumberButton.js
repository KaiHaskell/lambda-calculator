import React from "react";

const NumberButton = props => {
  return (
    <button
      className="number-button"
      onClick={() => props.addNumber(props.text)}
    >
      {props.button}
      {props.text}
    </button>
  );
};

export default NumberButton;
