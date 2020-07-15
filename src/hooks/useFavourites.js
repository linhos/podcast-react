import React, {useEffect, useState} from 'react';
import application from '../services';

const useFavourites = (keyword=false) => {

  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);
  

  useEffect(() => {

    application.favourite.find().then(result => {
      setFavourites(result.favourites);
      setLoading(false);
    })
  }, []);


  return {favourites, loading}

}

export {useFavourites}