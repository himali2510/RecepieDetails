import React, { useState, useEffect } from 'react';
import RecipeDetails from './RecipeDetails';
//Get the property of Recepie Object
const Recipe = ({ recipe }) => {
    const [show, setShow] = useState(false);// Toogle button of Ingridiance
    const { label, image, url, ingredients } = recipe.recipe;//De-structure the recepie properties
    return (
        <div className="recipe">
            <h2>{label}</h2>
            <img src={image} alt={label} />

            {/* 
                link will opn in new page using target blank
                noopener&noreferrer used bcoz we might have security issues without it
            */}
            <a href={url} target="_blank" rel="noopener noreferrer">
                URL
            </a>
            <button onClick={() => setShow(!show)}>Ingredients</button>
            {/* if show is true then display data */}
            {show && <RecipeDetails ingredients={ingredients} />}
        </div>
    );
}
export default Recipe;