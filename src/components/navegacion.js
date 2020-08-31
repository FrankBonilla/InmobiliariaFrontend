import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 1rem;

    @media (min-width: 768px){
        padding: 0;
        flex-direction: row;
    }
    `;

const NavLink = styled(Link)`
    color: #FFF;
    font-weight: bold;
    font-family: 'PT Sans', sans-serif;
    margin: 0.5rem;
    text-decoration: none;
    margin-right: 1rem;
    &::last-of-type {
        margin-right: 0;
    }
    &.pagina-actual {
        border-bottom: 2px solid #FFF;
    }

    @media (max-width: 768px){
        padding-top:1rem;
        font-size: 1.4rem;
        margin: 0.5rem;
    }
    `;


const Navegacion = () => {
    return ( 
        <Nav>
            <NavLink to={'/'}
                      activeClassName="pagina-actual">Inicio</NavLink>
            <NavLink to={'/nosotros'}
                     activeClassName="pagina-actual">Nosotros</NavLink>
            <NavLink to={'/propiedades'}
                     activeClassName="pagina-actual">Propiedades</NavLink>
        </Nav>
     );
}
 
export default Navegacion;