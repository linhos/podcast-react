import React, {useEffect, useState} from 'react';
import application from '../services';

interface Favourite {
  id: number;
  name: string;
}


const useFavourites = (keyword=false) => {

  const [favourites, setFavourites] = useState<Favourite[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  useEffect(() => {

    application.favourite.find().then(result => {
      setFavourites(result.favourites);
      setLoading(false);
    })
  }, []);


  return {favourites, loading}

}

export {useFavourites}