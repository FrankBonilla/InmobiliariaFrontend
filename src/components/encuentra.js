import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import styled from '@emotion/styled';

const ImageBackgound = styled(BackgroundImage)`
        height: 300px;
    `;
const Imagenbg = styled.div`
    color: #FFF;
    height: 100%;
    max-width: 1200px;
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2.3rem;

    @media (max-width: 768px){
        font-size: 1.5rem;
    }
    `;

const Ecnuentra = () => {

    const { imagen } = useStaticQuery(graphql`
        query{
            imagen: file(relativePath: { eq : "encuentra.jpg"}) {
            sharp: childImageSharp {
                fluid( maxWidth: 1500){
                    ...GatsbyImageSharpFluid_withWebp
                }
                }
            }
        }
    `)
    //console.log(imagen);

    return (    
         <ImageBackgound tag="section" fluid={imagen.sharp.fluid} fadeIn="soft">
             <Imagenbg>
                 <h3>Encuentra la casa de tus sueños</h3>
                 <p>15 años de experiencia</p>
             </Imagenbg>
         </ImageBackgound> );
}
 
export default Ecnuentra;