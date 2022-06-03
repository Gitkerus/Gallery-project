import React, { useEffect, useState, useCallback } from "react";

import { useGlobalContext } from "../context";
import SingleContent from "./SingleContent";
import { loadPaintings } from "../Api/apiRequests";
import { pageObjectsLimit } from "../Constants/constants";
import noMatchesFound from "../Assets/noMatchesFound.jpg";

function ContentList() {
  const {
    locations,
    authors,
    currentAuthor,
    currentLocation,
    inputNameValue,
    inputRangeFromValue,
    inputRangeBeforeValue,
    page,
    setPagesAmount,
  } = useGlobalContext();

  const [paintings, setPaintings] = useState([]);

  const createRequest = (queryParams) => {
    return async () => {
      if (inputNameValue !== "") {
        queryParams.q = `${inputNameValue}`;
      }
      const foundAuthor = authors.find((item) => item.name === currentAuthor);
      if (currentAuthor !== "Author") {
        queryParams.authorId = foundAuthor.id;
      }
      const foundLocation = locations.find(
        (item) => item.location === currentLocation
      );
      if (currentLocation !== "Location") {
        queryParams.locationId = foundLocation.id;
      }
      if (inputRangeFromValue !== "" && inputRangeBeforeValue !== "") {
        queryParams.created_gte = `${inputRangeFromValue}`;
        queryParams.created_lte = `${inputRangeBeforeValue}`;
      }
      return await loadPaintings(queryParams);
    };
  };

  const loadFilteredPaintings = useCallback(createRequest({}), [
    authors,
    locations,
    currentAuthor,
    currentLocation,
    inputRangeFromValue,
    inputRangeBeforeValue,
    inputNameValue,
  ]);

  const findPagesAmount = useCallback(async () => {
    const data = await loadFilteredPaintings();
    const pages = Math.ceil(data.length / 12);
    setPagesAmount(pages);
  }, [loadFilteredPaintings]);

  useEffect(() => {
    findPagesAmount();
  }, [findPagesAmount]);

  const loadFilteredPaginatedPaintings = useCallback(
    createRequest({ _limit: pageObjectsLimit, _page: page }),
    [
      authors,
      locations,
      currentAuthor,
      currentLocation,
      inputRangeFromValue,
      inputRangeBeforeValue,
      inputNameValue,
      page,
    ]
  );

  const getPaintings = useCallback(async () => {
    const data = await loadFilteredPaginatedPaintings();
    setPaintings(data);
  }, [loadFilteredPaginatedPaintings]);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  if (paintings.length === 0) {
    return (
      <section className="content__box">
        <div
          className="single__content"
          style={{
            background: `url(${noMatchesFound})center/cover no-repeat`,
          }}
        >
          <div className="single__content__tooltip">
            <h2>No matches found, change search parametrs</h2>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="content__box">
        {paintings.map((item) => {
          return <SingleContent key={item.id} {...item} />;
        })}
      </section>
    </>
  );
}

export default ContentList;
