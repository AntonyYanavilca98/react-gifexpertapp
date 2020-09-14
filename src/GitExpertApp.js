import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GitExpertApp = () => {

    // const categories = ['One Punch', 'Samurai x', 'DBZ'];
    const [ categories, setCategories ] = useState(['One Punch']);
    // const handleAdd = () =>{
    //     setCategories([...categories,"HunterXHunter"]);
    // };

    return (
        <>
            <h2>GitExpertApp</h2>
            <hr/>
            <AddCategory setCategories={ setCategories }/>
            {/* <button onClick={ handleAdd }>Agregar</button> */}
            <ol>
                {
                    categories.map(category => 
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                }
            </ol>

        </>
    )
}
