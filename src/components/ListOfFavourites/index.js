import React from "react";


const ListOfFavourites = ({loading, favourites}) => {
  return (
    <>
      <h5>Favoritos</h5>
      <ul>
        {loading &&
          <h6>cargando ...</h6>
        }
        {favourites.map((value) => (
          <li key={value.username}>{value.username}</li>
        ))}
      </ul>
    </>
  );
};

export { ListOfFavourites };
