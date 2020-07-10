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
            <Link to={`/search/ann`} className="links">Buscar</Link>
            <Link to="/favourites" className="links">Favoritos</Link>
        </nav>
    )
}

export {NavBar};
