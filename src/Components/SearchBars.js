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

  // Компонент Range и его принимаемая функция onClose не работают. Она срабатывает не только при закрытии контейнера Range, но и  при нажатии на любой компонент фильтрации. Предположительно где то внутри использован хук с аутсайд кликом, как обойти эту проблему я так и не понял

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
        placeholder="Created"
        onClose={() => {}}
      >
        <RangeInputs />
      </Range>
    </section>
  );
}

export default SearchBars;
