import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from '@emotion/styled';

const ListadoIconos = styled.ul`
    display: flex;
    justify-content: space-between;
    flex: 1;
    max-width: 500px;
    margin: 3rem auto 0 auto;

    @media (max-width: 768px){
        margin: 0 auto 0 auto;
        justify-content: space-around;
        
    }

    li {
        display: flex;
        img {
            margin-right: 1rem;

            @media (max-width: 768px){
                width: 2rem;
                margin-left: 1rem;
                }
        }
    }
    `;

const Iconos = ({wc, estacionamiento, habitaciones}) => {

    const { iconos } = useStaticQuery(graphql`
        query{
            iconos: allFile(filter: {relativeDirectory: {eq: "iconos"} }) {
            edges{
                node {
                id
                publicURL
                }
            }
            }
        }
    `);
    
    const imagensIconos = iconos.edges;
   // console.log(iconos);

    return ( 
        <ListadoIconos>
            <li>
                <img src={imagensIconos[2].node.publicURL} alt="icono wc"/>
                <p>{wc}</p>
            </li>
            <li>
                <img src={imagensIconos[1].node.publicURL} alt="icono estacionamiento"/>
                <p>{estacionamiento}</p>
            </li>
            <li>
                <img src={imagensIconos[0].node.publicURL} alt="icono habitaciones"/>
                <p>{habitaciones}</p>
            </li>
        </ListadoIconos>
     );
}
 
export default Iconos;