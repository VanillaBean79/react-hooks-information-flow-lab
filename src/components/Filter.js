import React, { useState } from "react";

function Filter({onCategoryChange}){
 const handleChange = (event) => {
    onCategoryChange(event.target.value)
 }
return(
    <select name="filter" onChange={onCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
)
}

export default Filter