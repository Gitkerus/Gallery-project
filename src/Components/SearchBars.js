import React from "react";
import { Range, Select, Input } from "fwt-internship-uikit";
import RangeInputs from "./RangeInputs";
import { useGlobalContext } from "../context";

function SearchBars() {
  // context data & useState for select components
  const {
    isDarkTheme,
    locations,
    authors,
    currentAuthor,
    setCurrentAuthor,
    currentLocation,
    setCurrentLocation,
    inputNameValue,
    setInputNameValue,
  } = useGlobalContext();

  // onChange/onClick

  const handleOnClose = () =>
    console.log("вызов функции принимающей новые параметры к fetch");

  return (
    <section className="filters__box">
      <Input
        type="text"
        isDarkTheme={isDarkTheme}
        className="filters__box__single input"
        placeholder="Name"
        value={inputNameValue}
        onChange={(e) => setInputNameValue(e.target.value)}
      />
      <Select
        isDarkTheme={isDarkTheme}
        options={authors}
        onChange={setCurrentAuthor}
        value={currentAuthor}
        className="filters__box__single"
      />
      <Select
        isDarkTheme={isDarkTheme}
        options={locations}
        onChange={setCurrentLocation}
        value={currentLocation}
        className="filters__box__single"
      />
      <Range
        isDarkTheme={isDarkTheme}
        className="filters__box__single"
        onClose={handleOnClose}
        placeholder="Created"
      >
        <RangeInputs />
      </Range>
    </section>
  );
}

export default SearchBars;
