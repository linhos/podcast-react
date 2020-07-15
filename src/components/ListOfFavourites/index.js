import React from "react";
import PropTypes from 'prop-types';

const ListOfFavourites = ({loading, favourites}) => {
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
