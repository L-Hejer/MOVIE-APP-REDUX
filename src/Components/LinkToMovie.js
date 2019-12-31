import React from "react";
import { Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";

function LinkToMovie ({movie}) {
return (
    <div>
     <div className="Movie-Description">
         <img className="Movie-Description-Image" src={movie.image} alt="movie image" />
     <div className="Movie-Description-informations">
     <StarRatingComponent
          name="Rate"
          className="star-rating-movie-Description"
          starColor="lightskyblue"
          emptyStarColor="grey"
          starCount={5}
          value={movie.rating}
        />
        <h1 className="Movie-Description-Title">{movie.name}</h1>
        <h4 className="Movie-Description-Date-Release">{movie.month} {movie.date}</h4>
<p>{movie.description}</p>
<h4>{movie.director}</h4>
 </div>
 </div>
 <div> <Link  to="/"><button className="Link">Home </button></Link></div></div>
);
}

export default LinkToMovie;