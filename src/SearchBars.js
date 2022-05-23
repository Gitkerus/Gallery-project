import React, { useState } from "react";
import { Range, Select, Pagination, Input } from "fwt-internship-uikit";

const options = [
  {
    id: 1,
    name: "Author",
  },
  {
    id: 2,
    name: "Biftor",
  },
  {
    id: 3,
    name: "Tester",
  },
  {
    id: 4,
    name: "Sositer",
  },
  {
    id: 5,
    name: "test",
  },
  {
    id: 6,
    name: "test",
  },
  {
    id: 7,
    name: "test",
  },
  {
    id: 8,
    name: "test",
  },
  {
    id: 9,
    name: "test",
  },
  {
    id: 10,
    name: "test",
  },
  {
    id: 11,
    name: "test",
  },
];

function SearchBars() {
  const [value, setValue] = useState("Author");
  const handleChange = (name) => {
    setValue(name);
  };

  return (
    <section className="search_box">
      <Input isDarkTheme={true} />
      <Select
        isDarkTheme={true}
        options={options}
        onChange={handleChange}
        value={value}
      />
      <Select isDarkTheme={true} />
      <Range isDarkTheme={true} />
    </section>
  );
}

export default SearchBars;
