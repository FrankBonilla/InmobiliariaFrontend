import React, { useState, useEffect } from 'react';
import { css } from '@emotion/core';
import usePropiedades from '../hooks/usePropiedades';
import PropiedadPreview from './propiedadPreview';
import styled from '@emotion/styled';
import useFiltro from '../hooks/useFiltro';

const Propiedades = styled.ul`
        max-width: 1200px;
        width: 95%;
        margin: 4rem auto 0 auto;

        @media (min-width: 480px){
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            row-gap: 2rem;
            column-gap: 2rem;
        }

        @media (min-width: 768px){
            grid-template-columns: repeat(3, 1fr);
        }
        `;

const ListadoPropiedades = () => {

    const resultado = usePropiedades();
    const [ propiedades ] = useState(resultado);
    const [ filtradas, guardarFiltradas ] = useState([]);
    //filtrando propiedades
    const { categoria, FiltroUI } = useFiltro();
   //console.log(categoria);
   //console.log(propiedades);

    useEffect(() => {
        if(categoria){
            const filtro = propiedades.filter( propiedad => propiedad.categoria.nombre === categoria);
            guardarFiltradas(filtro);
        }else {
            guardarFiltradas(propiedades);
        }
        
    }, [categoria])
   
    return (<> 
            <h2
                css={css`
                    margin-top: 5rem;
                    margin-bottom: 3rem;
                    `}>Nuestras Propiedades</h2> 
                {FiltroUI()}
            <Propiedades>
                {filtradas.map( propiedad => (
                    <PropiedadPreview
                        key={propiedad.id} 
                        propiedad={propiedad}   
                        />
                ))}
            </Propiedades>  
            </>      
                    );
}
 
export default ListadoPropiedades;