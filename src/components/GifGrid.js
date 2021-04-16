import React from 'react'
import { GifGridItem } from './GifGridItem.jsx';
import { useFetchGifs } from '../hooks/useFetchGifs.js';

export const GifGrid = ({ category }) => {

    const { data:images, loading } = useFetchGifs( category );

    return (
        <>
            <h3>{ category }</h3>

            { loading && <p>Cargando resultados</p> }

            <div className='card-grid'>
                {
                    images.map( ( img ) => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img } 
                        />
                    ))
                }
            </div>
        </>
    )
}
