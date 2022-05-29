import React, { useEffect, useState, useCallback } from "react";
import SingleContent from "./SingleContent";

const baseUrl = "https://test-front.framework.team";

function ContentList() {
  const [paintings, setPaintings] = useState([]);

  const getPaintings = useCallback(async () => {
    const response = await fetch(baseUrl + "/paintings");
    const paintings = await response.json();
    setPaintings(paintings);
  }, [baseUrl]);

  useEffect(() => {
    getPaintings();
  }, [baseUrl, getPaintings]);

  return (
    <>
      <section className="content__box">
        {paintings.map((item) => {
          return <SingleContent key={item.id} {...item} baseUrl={baseUrl} />;
        })}
      </section>
    </>
  );
}

export default ContentList;
