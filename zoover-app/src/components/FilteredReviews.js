import React from 'react';


export default function FilteredTraveldWith (props) {
  const {onFilterChange, reviews} = props;
  const handleChange = event => {
    onFilterChange(event);
  }
  const traveledWith = reviews.map(review => review.traveledWith);
  let filters = new Set();
  traveledWith.forEach(item => filters.add(item));
 
  return (
    <div>
        
      <select onChange={handleChange}>{Array.from(filters).map((traveledWithItem, index) => 
        <option key={index}  value={traveledWithItem}>{traveledWithItem}</option>)}
      </select>
    </div>
  )
}

  