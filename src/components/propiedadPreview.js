import React from 'react';
import Iconos from './iconos';
import styled from '@emotion/styled';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import urlSlug from 'url-slug';

const Boton = styled(Link)`
    margin-top: 2rem;
    padding: 1rem;
    background-color: #75ab00;
    width: 100%;
    color: #fff;
    display: block;
    text-decoration: none;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    `;

const Card = styled.div`
    border: 1px solid #e1e1e1;
    img {
        max-width: 100%;
    }
    @media (max-width: 768px){
            margin-top: 2rem;
            }
    `;
const Contenido = styled.div`
        padding: 2rem;

        h3 {
            font-family: 'Lato', sans-serif;
            margin: 0 0 2rem 0;
            font-size: 2.4rem;
            text-align: center;

            @media (max-width: 768px){
                margin: 0 0 1rem 0;
                font-size: 1.8rem;
                line-height: 4.5;
            }
        }
        .precio {
            text-align: center;
            font-size: 2rem;
            color: #75AB00;

            @media (max-width: 768px){
                margin-bottom: 0;
            }
            
        }

        .tituloYprecio{
            @media (max-width: 767px){
                    display:flex;
                    justify-content: space-around; 
                    margin-bottom: 0;
            }
            @media (min-width: 768px){
                    display:block;
                    
            }
        }

        @media (max-width: 400px){
            background-color: #DFEAED;
        }
        `;

const PropiedadPreview = ({propiedad}) => {

    const { nombre, wc, estacionamiento, habitaciones, precio, imagen } = propiedad;
    return ( 
        <Card>
            <Image
                fluid={imagen.sharp.fluid}
                />
            <Contenido>
                <div className="tituloYprecio">
                    <h3>{nombre}</h3> 
                    <p className="precio">{precio} €</p>
                </div>
                
                <Iconos
                    wc={wc}
                    estacionamiento={estacionamiento}
                    habitaciones={habitaciones} />
                <Boton to={ `/${urlSlug( nombre )}`}>
                    Ver Propiedad
                </Boton>
            </Contenido>
        </Card>
     );
}
 
export default PropiedadPreview;