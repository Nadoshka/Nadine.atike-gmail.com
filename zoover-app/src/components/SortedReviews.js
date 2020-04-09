import React from 'react';

export default function SortedReviews(props) {
    const {onSortChange} = props;
    
    return (
        <div>
            <input type="radio" id="travel-date" name="sortDate" value="travel-date" onChange={onSortChange}/>
            <label htmlFor="travel-date" >Trip date</label>

            <input type="radio" id="submission-date" name="sortDate" value="submission-date" onChange={onSortChange}/>
            <label htmlFor="submission-date" >Review date</label>
        </div>
    )
}
