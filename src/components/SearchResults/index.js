import React from 'react';
import { useParams } from "react-router-dom";

import { ListOfFavourites } from '../ListOfFavourites';
import {useFavourites} from '../../hooks/useFavourites'
import {SearchForm} from '../SearchForm';


const SearchResults = () => {
    const {keyword} = useParams();

    const {favourites, loading} = useFavourites(keyword);
    
    return (
        <>
        <SearchForm />
        <ListOfFavourites favourites={favourites} loading={loading} />
        </>
    )
   
}

export {SearchResults};