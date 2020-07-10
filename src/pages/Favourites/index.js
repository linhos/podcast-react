import React from 'react';
import {useFavourites} from '../../hooks/useFavourites';
import {ListOfFavourites} from '../../components/ListOfFavourites'

const Favourites = () => {
    const {favourites, loading} = useFavourites();
    return <ListOfFavourites loading={loading} favourites={favourites} />
}

export default Favourites;