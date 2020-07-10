import React from 'react';
import { ListOfFavourites } from '../ListOfFavourites';
import { useParams } from "react-router-dom";


const SearchResults = () => {

    const {keyword} = useParams();
    return <ListOfFavourites keyword={keyword} />
   
}

export {SearchResults};