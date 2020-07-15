import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';

const SearchForm: React.FC = () => {
    const history = useHistory();

    const [search, setSearch] = useState('');

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const value:string = e.target.value;
        setSearch(value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        history.push(`/search/favourites`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label >Buscar</label>
            <input type="text" onChange={handleChange} placeholder="que quieres buscar?" />
        </form>
    )

}

export {SearchForm};