import React from 'react';
import {useFavourites} from '../../hooks/useFavourites';
import {
    useParams
} from "react-router-dom";

const Favourites = ({keyword}) => {


    const {loading, favourites} = useFavourites(keyword)

    return (
        <ul>
            { 
                favourites.map((value) => <li key={value.name}>{value.name}</li> 
            )}
        </ul>
    )
}

export {Favourites};