
import React from "react";
import Star from "./Star";



const StarRating = () => {
  const [rating, setRating] = React.useState(0);

  const stars = [...Array(5)].map((_, index) => (
    <Star
      key={index}
      selected={index < rating}
      onClick={() => setRating(index + 1)}
    />
  ));
   

  return (
    <div className="star-container">
    <div className="stars">{stars}</div>
      
      <h2>
        {rating === 0
          ? "No rating yet"
          : rating === 1
          ? "Poor"
          : rating === 2
          ? "Fair"
          : rating === 3
          ? "Good"
          : rating === 4
          ? "Very Good"
          : "Excellent"}
      </h2>
    </div>
  );
};

export default StarRating;
