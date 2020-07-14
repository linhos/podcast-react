import { API_URL } from "./settings";

async function getFavourites() {
  const result = {
    favourites: [],
    errors: [],
  };
  const apiUrl = `${API_URL}users`;

  try {
    const response = await fetch(apiUrl);
    const json = await response.json();
    result.favourites = json;
  } catch (error) {
    console.log(error);
    result.errors = [...result.errors, error.toString()];
  }
  return result;
}

export { getFavourites };
