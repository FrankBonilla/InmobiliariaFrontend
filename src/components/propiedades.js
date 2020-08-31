import React from 'react';
import Layout from '../components/layout';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

const Contenido = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    width: 95%;

    .descripcion {
            text-align: justify;
        }

    @media (min-width: 768px){
        text-align: justify;
        display: grid;
        grid-template-columns: 2fr 1fr;
        column-gap: 5rem;
    }
    `;

const Sidebar = styled.aside`
    
    .precio {
        font-size: 3.5rem;
        color: #75AB00;
        text-align: center;
    }
    .agente{
        margin-top:4rem;
        border-radius: 2rem;
        background-color: #75AB00;
        padding: 3rem;
        color: #fff;
    }

    p {
        margin: 0;
    }

    @media (max-width: 768px) {
        .precio {
            font-size: 2.5rem;
            margin-bottom: 1.5rem;
        }
    }
    `;


export const query = graphql`
    query($id: String!) {
        allStrapiPropiedades(filter: { id: { eq: $id}}){
             nodes {
                nombre
                descripcion
                wc
                estacionamiento
                habitaciones
                precio
                agentes {
                    nombre
                    telefono
                    email
                }
                imagen {
                    sharp: childImageSharp {
                        fluid (maxWidth: 1200){
                            ...GatsbyImageSharpFluid_withWebp
                        }
                    }
                }
                }
            }
    }`;


const Propiedades = ({data: {allStrapiPropiedades: { nodes }}}) => {

    const {nombre, descripcion, wc, estacionamiento, habitaciones, agentes, imagen, precio} = nodes[0];

    return ( 
        <Layout>
            <h1>{nombre}</h1>
            <Contenido>
                <main>
                    <Image fluid={imagen.sharp.fluid} />
                    <p className="descripcion">{descripcion}</p>
                </main>
                <Sidebar>
                    <p className="precio">{precio} €</p>
                    <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones} />
                    <div className="agente">
                        <h2>Vendedor:</h2>
                        <p >{agentes.nombre}</p>
                        <p>Telf: {agentes.telefono}</p>
                        <p>Email: {agentes.email}</p>
                    </div>
                </Sidebar>
            </Contenido>
        </Layout>
        
     );
}
 
export default Propiedades;