import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp =  () => {
    const [categories, setCategories] = useState(['One Punch']);
    
    /* const handleAdd = () =>{
        // manera simple de hacerlo
        //setCategories( [...categories,'HunterxHunter']);
        setCategories( cates => [...cates, 'HunterxHunter']);
    }; 
 */
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