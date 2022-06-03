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

  // Компонент Range и его принимаемая функция onClose не работают. Она срабатывает не только при закрытии контейнера Range, но и  при нажатии на любой компонент фильтрации. Предположительно где то внутри использован хук с аутсайд кликом, как обойти эту проблему не переписывая компоненты библиотеки я так и не понял.

  // В Макете Figma были показаны иконки "крестик" для сброса фильтрации, в готовой библиотеке их не оказалось, а писать компоненты самому с нуля пока-что слишком мало опыта и заняло бы слишком много времени, так что я реализовал сброс фильтраций селектов Authors и Locations дополнительными элементами с соотвествующими названиями в конце раскрывающихся списков.

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
        options={authors.concat({
          name: "Author",
          id: 10,
        })}
        onChange={setCurrentAuthor}
        value={currentAuthor}
        className="filters__box__single"
      />
      <Select
        isDarkTheme={isDarkTheme}
        options={locations.concat({
          name: "Location",
          id: 23,
        })}
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
