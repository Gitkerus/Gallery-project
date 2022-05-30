import React from "react";
import { useGlobalContext } from "../context";
import PropTypes from "prop-types";

function SingleContent({
  authorId,
  created,
  imageUrl,
  locationId,
  name,
  baseUrl,
}) {
  const { authors, locations } = useGlobalContext();
  const newAuthors = authors.find((item) => item.id === authorId);
  const newLocations = locations.find((item) => item.id === locationId);
  return (
    <div
      className="single__content"
      style={{ background: `url(${baseUrl}${imageUrl})center/cover no-repeat` }}
    >
      <div className="single__content__tooltip">
        <h2>{name}</h2>
        <h3>
          Author: <span>{newAuthors["name"]}</span>
        </h3>
        <h3>
          Created: <span>{created}</span>
        </h3>
        <h3>
          Location: <span>{newLocations["location"]}</span>
        </h3>
      </div>
    </div>
  );
}

SingleContent.propTypes = {
  authorId: PropTypes.number,
  locationId: PropTypes.number,
  created: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};
export default SingleContent;
