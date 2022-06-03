import React from "react";

import { baseUrl } from "../Constants/constants";
import { useGlobalContext } from "../context";

function SingleContent({ authorId, created, imageUrl, locationId, name }) {
  const { authors, locations } = useGlobalContext();
  const newAuthor = authors.find((item) => item.id === authorId);
  const newLocation = locations.find((item) => item.id === locationId);
  if (!newAuthor || !newLocation) {
    return null;
  }

  return (
    <div
      className="single__content"
      style={{ background: `url(${baseUrl}${imageUrl})center/cover no-repeat` }}
    >
      <div className="single__content__tooltip">
        <h2>{name}</h2>
        <h3>
          Author: <span>{newAuthor["name"]}</span>
        </h3>
        <h3>
          Created: <span>{created}</span>
        </h3>
        <h3>
          Location: <span>{newLocation["location"]}</span>
        </h3>
      </div>
    </div>
  );
}

export default SingleContent;
