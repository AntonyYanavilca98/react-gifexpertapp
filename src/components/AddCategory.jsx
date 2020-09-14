import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value);
    };

    const handLeSubmit = (e) => {
        e.preventDefault();
        // console.log('Submit hecho');
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue,...cats, ]);
            setInputValue('');
        }
    }

    return ( 
        <form onSubmit = { handLeSubmit }>
        <h1> Add Category </h1> 
        <h2> { inputValue } </h2> 
        <input type = "text"
        value = { inputValue }
        onChange = { handleInputChange }
        /> 
        </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}