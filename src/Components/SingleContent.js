import React from "react";
import { useGlobalContext } from "../context";

function SingleContent({
  authorId,
  created,
  id,
  imageUrl,
  locationId,
  name,
  baseUrl,
}) {
  return (
    <div
      className="single__content"
      style={{ background: `url(${baseUrl}${imageUrl})center/cover no-repeat` }}
    >
      <div className="single__content__tooltip">
        <h2>{name}</h2>
        {/* <h3>Author:{authors.authodId}</h3> */}
        <h3>Created:{created}</h3>
        {/* <h3>Location:{locations.locationId}</h3> */}
        {/* Чтобы выводило Автора и Локацию написания картины надо подтянуть еще 2 массива, которые будут и так фетчится для 2 селектов в блоке фильтрации. Теперь надо каким то образом сделать так, чтобы при этом всем подтягивании остальных параметров для URL запроса на сервер шло в верном порядке, а если они пустые то и ничего не подтягивалось. Надо написать несколько функций onClick для селектов */}
      </div>
    </div>
  );
}
export default SingleContent;
