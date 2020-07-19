import React from 'react';
import {
    Link
} from "react-router-dom";

import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    flex-direction: row;
`;

const links = styled.a`
    margin-right: 15px;
`;

function NavBar () {

    return(
        <nav className="Nav"> 
            <Link to="/" className="links">Inicio</Link>
            <Link to={`/search/`} className="links">Buscar</Link>
            <Link to="/favourites" className="links">Favoritos</Link>
            <Link to="/notices" className="links">Avisos</Link>
            <Link to="/login" className="links">Login</Link>
            <Link to="/register" className="links">Register</Link>
        </nav>
    )
}

export {NavBar};
