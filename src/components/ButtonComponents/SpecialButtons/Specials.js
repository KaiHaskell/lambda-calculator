import React, { useState } from "react";
import SpecialButton from "./SpecialButton";
import { specials } from "../../../data";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  const [specialCount] = useState(specials);

  return (
    <div>
      {specialCount.map((button, index) => (
        <SpecialButton key={index} button={button} />
      ))}
    </div>
  );
};

export default Specials;
