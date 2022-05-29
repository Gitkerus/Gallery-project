import React, { useState, useEffect, useCallback } from "react";
import { Range, Select, Input } from "fwt-internship-uikit";
import { useGlobalContext } from "./context";

function SearchBars() {
  // context data & useState for select components
  const { isDarkTheme, baseUrl } = useGlobalContext();
  const [currentAuthor, setCurrentAuthor] = useState("Author");
  const [currentLocation, setCurrentLocation] = useState("Location");

  // onChange/onClick
  const handleChangeAuthor = (name) => {
    setCurrentAuthor(name);
  };
  const handleChangeLocation = (name) => {
    setCurrentLocation(name);
  };

  const handleOnClose = () => console.log("test");

  // Fetch
  const [authors, setAuthors] = useState([]);
  const getAuthors = useCallback(async () => {
    const response = await fetch(baseUrl + "/authors");
    const authors = await response.json();
    setAuthors(authors);
  }, [baseUrl]);

  useEffect(() => {
    getAuthors();
  }, [baseUrl, getAuthors]);

  const [locations, setLocations] = useState([]);
  const getLocations = useCallback(async () => {
    const response = await fetch(baseUrl + "/locations");
    const locations = await response.json();
    locations.map((item) => {
      item.name = item.location;
      return item;
    });
    setLocations(locations);
  }, [baseUrl]);

  useEffect(() => {
    getLocations();
  }, [baseUrl, getLocations]);

  return (
    <section className="filters__box">
      <Input isDarkTheme={isDarkTheme} className="filters__box__single" />
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
      />
    </section>
  );
}

export default SearchBars;
