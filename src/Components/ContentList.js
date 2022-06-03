import React, { useEffect, useState, useCallback } from "react";

import { useGlobalContext } from "../context";
import SingleContent from "./SingleContent";
import { loadPaintings } from "../Api/apiRequests";
import { pageObjectsLimit } from "../Constants/constants";

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
  const [noPaginationPaintings, setNoPaginationPainting] = useState([]);

  const loadFilteredPaintings = useCallback(async () => {
    const queryParams = {};

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
  }, [
    authors,
    locations,
    currentAuthor,
    currentLocation,
    inputRangeFromValue,
    inputRangeBeforeValue,
    inputNameValue,
  ]);

  const getNoPaginationPainting = useCallback(async () => {
    const data = await loadFilteredPaintings();
    setNoPaginationPainting(data);
  }, [loadFilteredPaintings]);

  useEffect(() => {
    getNoPaginationPainting();
  }, [getNoPaginationPainting]);

  const findPagesAmount = useCallback(async () => {
    const data = await loadFilteredPaintings();
    const pages = Math.ceil(data.length / 12);
    setPagesAmount(pages);
    console.log(pages);
  }, [loadFilteredPaintings]);

  useEffect(() => {
    findPagesAmount();
  }, [findPagesAmount]);

  const loadFilteredPaginatedPaintings = useCallback(async () => {
    const queryParams = {
      _limit: pageObjectsLimit,
      _page: page,
    };

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
  }, [
    authors,
    locations,
    currentAuthor,
    currentLocation,
    inputRangeFromValue,
    inputRangeBeforeValue,
    inputNameValue,
    page,
  ]);

  const getPaintings = useCallback(async () => {
    const data = await loadFilteredPaginatedPaintings();
    setPaintings(data);
  }, [loadFilteredPaginatedPaintings]);

  useEffect(() => {
    getPaintings();
  }, [getPaintings]);

  // if(paintings=[]){
  //   return <NoContentFound />
  // }

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
