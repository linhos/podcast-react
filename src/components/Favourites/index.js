import React from "react";
import { useFavourites } from "../../hooks/useFavourites";

const Favourites = ({ keyword }) => {
  const { loading, favourites } = useFavourites(keyword);

  return (
    <ul>
      {favourites.map((value) => (
        <li key={value.name}>{value.body}</li>
      ))}
    </ul>
  );
};

export { Favourites };
