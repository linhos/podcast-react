import React, {useEffect, useState} from 'react';
import {getFavourites} from '../services/getFavourites';

const useFavourites = (keyword=false) => {

  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getFavourites().then(favourites => {
      setFavourites(favourites);
      setLoading(false);
    })
  }, []);


  return {favourites, loading}

}

export {useFavourites}