import React from 'react';
import Rating from '@material-ui/lab/Rating';

const AccommodationBox =  (props) => {
    const {title, text, user,ratings} = props;
    return (
    <div>
        <h1>{title}</h1>
        <p>{text}</p>
        <p>{user}</p>
        <Rating name="pristine" value={ratings} max={10} />
    </div>
    )}

    export default AccommodationBox;