import React from "react";
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

interface ListOfFavouritesProps {
  loading: boolean
  favourites: Array<{userId: number, id: number, title: string, completed: boolean}>
}

const ListOfFavourites = ({loading, favourites}: ListOfFavouritesProps) => {
  console.log(favourites)
  return (
    <>
      <h5>Favoritos</h5>
      <ul>
        {loading &&
          <h6>cargando ...</h6>
        }
        <Wrapper data-testid="FavouriteTile">
          {favourites.map((value) => (
            <li key={value.id}>{value.title}</li>
          ))}
        </Wrapper>
      </ul>
    </>
  );
};

ListOfFavourites.propTypes = {
  loading: PropTypes.bool.isRequired,
  favourites: PropTypes.array.isRequired,
}

export { ListOfFavourites };
