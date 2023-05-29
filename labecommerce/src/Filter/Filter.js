import React from 'react';
import './Filter.css'

function Filter({ value, minPrice, maxPrice, onChange }) {
    return (
        <div>
            <label>Filter by name:</label>
            <input type="text" value={value} onChange={(e) => onChange(e.target.value, minPrice, maxPrice)} />
            <br></br>
            <label>Min Price:</label>
            <input
                type="number"
                value={minPrice}
                onChange={(e) => onChange(value, e.target.value ? parseInt(e.target.value) : '', maxPrice)}
            />
            <br></br>
            <label>Max Price:</label>
            <input
                type="number"
                value={maxPrice}
                onChange={(e) => onChange(value, minPrice, e.target.value ? parseInt(e.target.value) : '')}
            />
        </div>
    );
}

export default Filter;