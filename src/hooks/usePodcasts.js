import React, { useEffect, useState } from "react";
import { getPodcasts } from "../services/getPodcasts";

export const usePodcasts = (keyword) => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPodcasts().then((podcasts) => {
        setPodcasts(podcasts);
        setLoading(false);
    });
  }, [keyword]);

  return { podcasts, loading };
};
