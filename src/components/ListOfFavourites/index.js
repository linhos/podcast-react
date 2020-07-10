import React from "react";
import { useFavourites } from "../../hooks/useFavourites";

const ListOfFavourites = () => {
  const { favourites, loading } = useFavourites();

  console.log(favourites)

  return (
    <ul>
      {favourites.map((value) => (
        <li key={value.username}>{value.username}</li>
      ))}
    </ul>
  );
};

export { ListOfFavourites };
