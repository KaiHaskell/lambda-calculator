import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";
//import any components needed

//Import your array data to from the provided data file

const Operators = () => {
  const [operatorCount] = useState(operators);
  return (
    <div className="operator-container">
      {operatorCount.map((button, index) => (
        <OperatorButton key={index} button={button} />
      ))}
    </div>
  );
};

export default Operators;
