import React, { useState, useEffect, useCallback } from "react";
import { Range, Select, Input } from "fwt-internship-uikit";
import { useGlobalContext } from "./context";

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
    inputValue,
    setInputValue,
  } = useGlobalContext();

  // onChange/onClick
  const handleChangeAuthor = (name) => {
    setCurrentAuthor(name);
  };
  const handleChangeLocation = (name) => {
    setCurrentLocation(name);
  };

  const handleOnClose = () => console.log("test");

  return (
    <section className="filters__box">
      <Input
        type="text"
        isDarkTheme={isDarkTheme}
        className="filters__box__single input"
        placeholder="Name"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      <Select
        isDarkTheme={isDarkTheme}
        options={authors}
        onChange={handleChangeAuthor}
        value={currentAuthor}
        className="filters__box__single"
      />
      <Select
        isDarkTheme={isDarkTheme}
        options={locations}
        onChange={handleChangeLocation}
        value={currentLocation}
        className="filters__box__single"
      />
      <Range
        isDarkTheme={isDarkTheme}
        className="filters__box__single"
        onClose={handleOnClose}
        placeholder="Created"
      ></Range>
    </section>
  );
}

export default SearchBars;
