import { API_URL } from "./settings";

function getPodcasts({ limit = 15 } = {}) {
  const apiUrl = `${API_URL}posts`;
  console.log(apiUrl);

  return fetch(apiUrl)
    .then((response) => response.json())
    .then((json) => json)
    .catch((error) => error);
}

export { getPodcasts };
