import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp =  () => {
    const [categories, setCategories] = useState(['ONE PUNCH']);
    

    return (
        <>
            <h2>GifExpertApp </h2>
            <AddCategory setCategories={setCategories}/>
            <hr/>
            {/* <button onClick={handleAdd}> Agregar </button> */}
            <ol>
                {
                    categories.map( category => (
                        <GifGrid 
                        category={category}
                        key={category}
                        />
                    ))
                }
            </ol>
        </>

    )
}



export default GifExpertApp;