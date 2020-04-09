import React from 'react';


export default function FilteredTraveldWith (props) {
  const {onFilterChange, reviews} = props;
  const traveledWith = reviews.map(review => review.traveledWith);
  let filters = new Set();
  traveledWith.forEach(item => filters.add(item));
 
  return (
    <div>
        
      <select onChange={onFilterChange}>{Array.from(filters).map((traveledWithItem, index) => 
        <option key={index}  value={traveledWithItem}>{traveledWithItem}</option>)}
      </select>
    </div>
  )
}

  