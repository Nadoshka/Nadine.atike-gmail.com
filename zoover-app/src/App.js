import React, { useState, useEffect } from 'react';
import './App.css';
import AccommodationBox from './components/AccommodationBox';
// import Pagination from '@material-ui/lab/Pagination';
import FilteredTraveldWith from './components/FilteredReviews';


function App() {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/reviews')
      .then(response => response.json())
      .then(reviews => {
        setReviews(reviews.all)
      });
  },[]); 

  function getAlltraveldWith () {
    return reviews.map((review) => review.traveldWith
     )}
  

  handleChange () = event =>{
    const type = event.target.value
    useState(review.traveldWith)

  // function PaginationControlled() {
  //   const [page, setPage] = useState(1);
  //   const handleChange = (event, value) => {
  //     setPage(value);
  //   }
  
return (
  <div>

<ul>
  {reviews.map((review, index) => 
  <li>
    <AccommodationBox key= {index} title={review.titles.en ? review.titles.en : review.titles.nl } text={review.texts.en ? review.texts.en : review.texts.nl  } user= {review.user} ratings={review.ratings.general.general}/>
    </li>) }
</ul>
<FilteredTraveldWith reviews={getAlltraveldWith()} />

{/* <Pagination count={10} page={page} onChange={handleChange} /> */}

  </div>
  )
}

export default App;