import React from 'react';
import { Favourites } from '../Favourites';
import { useParams } from "react-router-dom";


const SearchResults = () => {

    const {keyword} = useParams();
    return <Favourites keyword={keyword} />
   
}

export {SearchResults};