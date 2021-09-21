import React from "react";
import { NumberDisplay, NumberPad, Number } from "./styles";

const KEYS = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "<"];
const PriceDisplay = () => {
  return (
    <>
      <NumberDisplay> R$ 0</NumberDisplay>
      <NumberPad>
        {KEYS.map((key) => (
          <Number key={key}>{key}</Number>
        ))}
      </NumberPad>
    </>
  );
};

export default PriceDisplay;
