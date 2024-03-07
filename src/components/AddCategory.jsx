import { useState } from "react";

// eslint-disable-next-line react/prop-types
const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length <= 1) return;
        onNewCategory(inputValue.trim());
        setInputValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={handleInputChange}    
            /> 
        </form>
       
    )
}

export default AddCategory;