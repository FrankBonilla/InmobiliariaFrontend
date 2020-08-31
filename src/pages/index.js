import React from 'react';
import Layout from '../components/layout';
import Encuentra from '../components/encuentra';
import useInicio from '../hooks/useinicio';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import BackgroundImage from 'gatsby-background-image';


const ImagenBackground = styled(BackgroundImage)`
    height: 600px;
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
    `;

const Titulo = styled.h1`
     font-size: 2rem;
     margin: 0;
     max-width: 800px;

     @media (min-width: 992px) {
        font-size: 4rem;
        }
    `;

const Index = () => {

    const inicio = useInicio();
    const { nombre, contenido, imagen } = inicio[0];

        return( 
            <Layout>
                <ImagenBackground
                        tag="section"
                        fluid={imagen.sharp.fluid}
                        fadeIn="soft"
                        ><Imagenbg>
                            <Titulo>Venta de casas y departamentos exclusivos</Titulo>
                        </Imagenbg>
                        </ImagenBackground>
                <main>
                    <div
                        css={css`
                        max-width: 800px;
                        margin: 0 auto;
                        `}>
                         <h1 
                            css={css`
                            margin-top: 4rem;
                            `}>{nombre}</h1>
                         <p 
                            css={css`
                            text-align: center;

                            @media (max-width: 768px) {
                                padding: 1.5rem;
                                text-align: justify;
                                font-size: 1.3rem;
                            }
                            `}>{contenido}</p>

                    </div>
                </main>
                <Encuentra />
            </Layout>
            );

}
export default Index;