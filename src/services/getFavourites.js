import {API_URL} from './settings';

function getFavourites () {
    const result = {
        favourites: [],
        errors: []
    }
    const apiUrl = `${API_URL}users`;

    return fetch(apiUrl)
        .then(response => response.json())
        .then(json => result.favourites = json)
        .catch(error => [...error, error.toString()]);

    
}

export {getFavourites};