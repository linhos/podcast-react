import React from "react";
import PropTypes, { number } from 'prop-types';


interface ListOfFavouritesProps {
  loading: boolean
  favourites: Array<{id: number, name: string}>
}

const ListOfFavourites = ({loading, favourites}: ListOfFavouritesProps) => {
  return (
    <>
      <h5>Favoritos</h5>
      <ul>
        {loading &&
          <h6>cargando ...</h6>
        }
        {favourites.map((value) => (
          <li key={value.name}>{value.name}</li>
        ))}
      </ul>
    </>
  );
};

ListOfFavourites.propTypes = {
  loading: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
}

export { ListOfFavourites };
