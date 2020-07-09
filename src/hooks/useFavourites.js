import React, {useEffect, useState} from 'react';


export const useFavourites = (keyword) => {

    const FAKE_DATA = [
        {id: 1, name: 'titulo1'},
        {id:2, name: 'titulo2'},
        {id:3, name: 'titulo3'}
    ];

    const [favourites, setFavourites] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let result = []
        if (keyword) {
            result = FAKE_DATA.filter((value) => value.name === keyword);
        } else {
            result = FAKE_DATA.map((value) => value);
        }
        
        setFavourites(result);
        setLoading(false);

    }, [keyword]);

    return {favourites, loading}

}
