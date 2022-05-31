import React from "react";
import { useGlobalContext } from "../context";

export default function RangeInputs() {
  const {
    isDarkTheme,
    inputRangeFromValue,
    setInputRangeFromValue,
    inputRangeBeforeValue,
    setInputRangeBeforeValue,
  } = useGlobalContext();

  return (
    <div className="range__box">
      <input
        type="text"
        placeholder="from"
        className="range__input range__box__element"
        onChange={(e) => setInputRangeFromValue(e.target.value)}
        value={inputRangeFromValue}
      />
      <div
        className={`${
          isDarkTheme
            ? "range__boxSeparator--light range__boxSeparator"
            : "range__boxSeparator"
        }`}
      ></div>

      <input
        type="text"
        placeholder="before"
        className="range__input range__box__element"
        onChange={(e) => setInputRangeBeforeValue(e.target.value)}
        value={inputRangeBeforeValue}
      />
    </div>
  );
}
