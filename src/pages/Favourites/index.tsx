import * as React from 'react';
import {useFavourites} from '../../hooks/useFavourites';
import {ListOfFavourites} from '../../components/ListOfFavourites'

const Favourites:React.FC = () => {
    const {favourites, loading} = useFavourites();
    return <ListOfFavourites loading={loading} favourites={favourites} />
}

export default Favourites;