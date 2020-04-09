import React, { useState, useEffect } from 'react';
import './App.css';
import AccommodationBox from './components/AccommodationBox';
import Pagination from '@material-ui/lab/Pagination';
import FilteredTraveldWith from './components/FilteredReviews';
import SortedReview from './components/SortedReviews';


let allReviews = [];

export default function App() {
  const [reviews, setReviews] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(recievedReviews => {
        allReviews=recievedReviews.all;
        setReviews(recievedReviews.all);
      });
  },[]); 
    
  const handleFilterChange = event => {
    const filterdValue = event.target.value
    const traveldWith = allReviews.filter(review => review.traveledWith === filterdValue);
    setReviews(traveldWith);
  }

  const handleSortChange = event => {
    const sortValue = event.target.value;
    const reviewsToSort = [...reviews];
    const sortedReviews = reviewsToSort.sort((a, b)=> {
      if (sortValue === "travel-date") {
        if (a.travelDate > b.travelDate){
          return -1;
        }
        if (a.travelDate < b.travelDate){
          return 1;
        }
        return 0;
      }
      
      if (sortValue === "submission-date") {
        if (a.entryDate>b.entryDate){
          return -1;
        }
        if (a.entryDate<b.entryDate){
          return 1;
        }
        return 0;
      }
    });
    setReviews(sortedReviews);
  }

  const handleChange = (event, value) => {
    setPage(value);
  }
  
  return (
    <div>

      <FilteredTraveldWith onFilterChange={handleFilterChange} reviews={allReviews}/>
      <SortedReview onSortChange={handleSortChange}/>

      <ul>
        {reviews.map((review, index) => 
          <li key={index}>
          {review.traveledWith}
          <AccommodationBox 
            title={review.titles.en ? review.titles.en : review.titles.nl}
            text={review.texts.en ? review.texts.en : review.texts.nl} 
            user= {review.user} ratings={review.ratings.general.general}
            entryDate={review.entryDate}
            travelDate={review.travelDate}/>
          </li>
        )}
      </ul>
      <Pagination count={10} page={page} onChange={handleChange}/>
    </div>
  )
}