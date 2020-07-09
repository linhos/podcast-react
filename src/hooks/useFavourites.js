import React, { useEffect, useState } from "react";
import { getPodcasts } from "../services/getPodcasts";

export const useFavourites = (keyword) => {
  const [favourites, setFavourites] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPodcasts().then((podcasts) => {
      setFavourites(podcasts);
      setLoading(false);
    });
  }, [keyword]);

  return { favourites, loading };
};
