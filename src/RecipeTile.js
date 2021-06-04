import React from 'react'
import './RecipeTile.css'

export default function RecipeTile({recipe}) {
 
    
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/)
        !=null && (
        <div onClick={()=>{
            window.open(recipe["recipe"]["url"]);
        }} className="RecipeTile_container">
            <img src={recipe["recipe"]["image"]} className="RecipeTile_image"></img>
            <p className="RecipeTile_text">{recipe["recipe"]["label"]} </p>
        </div>
    ))
}
