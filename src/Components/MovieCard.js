import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import EditMovie from "./EditMovie";
import { Delete } from "../Redux/actions";

const MovieCard = props => {
  const { movie = {} } = props;
  const { name = "", date = "", month="", image = "", rating = 1 } = movie;
  const { Delete = () => {} } = props;
  return (
    <div>
      <div className="Movie-Container">
        <img src={image} alt="" />
        <StarRatingComponent
          name="Rate"
          className="star-rating-movie"
          starColor="lightskyblue"
          emptyStarColor="grey"
          starCount={5}
          value={rating}
        />
        <h1 className="Movie-Title">{name}</h1>
        <h4 className="Movie-Date-Release">{month} {date}</h4>
        <div className="card-btn-container">
          <EditMovie movie={movie} />
          <button className="card-btn" onClick={() => Delete(movie.id)}>
            Remove
          </button>
        </div>
      </div>
      <Link to ={`/${movie.id}`}><button className="description-btn">Movie Description</button></Link>
    </div>
  );
};
const mapStateToProps = () => {
  return {};
};
const mapDispatchToProps = dispatch => {
  return {
    Delete: payload => dispatch(Delete(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);
