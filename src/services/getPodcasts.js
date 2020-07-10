import { API_URL } from "./settings";

function getPodcasts({ limit = 15 } = {}) {
  const apiUrl = `${API_URL}posts`;


  return fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => json.slice(1, 3))
    .catch((error) => error);
}

export { getPodcasts };
