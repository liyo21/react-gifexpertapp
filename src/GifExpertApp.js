import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setsCategories] = useState(['Dragon Ball']);

/*     const handleAdd = () => {
        // setsCategories( [...categories, 'Naruto'] ); Para agregar al final del arreglo
        setsCategories( ['Saint Seiya', ...categories] ); // Parar agregar al inicio del arreglo
        // setsCategories( cats => [ ...cats, 'Naruto' ] ); Otra forma de agregar nuevos valores a un arreglo
    } */

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setsCategories={ setsCategories }/>
            <hr />

            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid
                            key={ category } 
                            category={ category }
                        />
                    ))
                }
            </ol>
        </>
    )
}
