import React from 'react';
import Rating from '@material-ui/lab/Rating';


const AccommodationBox =  (props) => {
    const {title, text, user,ratings, entryDate, travelDate} = props;
    const mappedEntryDate = new Date(entryDate);
    const mappedTravelDate = new Date(travelDate);
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
            <p>{user}</p>
            <p>Entry date: {mappedEntryDate.toDateString()}</p>
            <p>Trip date: {mappedTravelDate.toDateString()}</p>
            <Rating name="pristine" value={ratings} max={10} />
        </div>
    )
}

export default AccommodationBox;