import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SearchForm = () => {
    const history = useHistory();

    const [search, setSearch] = useState('');

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(event){
        event.preventDefault()
        history.push(`/search/${search}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Buscar</label>
            <input type="text" onChange={handleChange} />
        </form>
    )

}

export {SearchForm};