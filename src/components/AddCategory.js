import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories} ) => {
    const [inputValue,setInputValue] = useState('')
    const handdleInputChange = (e) =>{
        setInputValue(e.target.value);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(inputValue.trim().length > 2){
            setCategories( cates => [inputValue, ...cates]);
            setInputValue('');
        }
        
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value= {inputValue}
                onChange = {handdleInputChange}
            ></input>
        </form>
    )
}

AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}
