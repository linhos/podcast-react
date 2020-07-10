import React from 'react';
import { ListOfFavourites } from '../ListOfFavourites';
import { useParams } from "react-router-dom";
import {useFavourites} from '../../hooks/useFavourites'

const SearchResults = () => {
    const {keyword} = useParams();

    const {favourites, loading} = useFavourites(keyword);
    
    return <ListOfFavourites favourites={favourites} loading={loading} />
   
}

export {SearchResults};