import React from "react";
import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import withLoader from "./withLoader";
import AddMovie from "./AddMovie";

const MovieList = props => {
  return (
    <div className="Movie-List">
      {props.moviesToDisplay
        .filter(
          el =>
            el.rating >= props.rating &&
            el.name
              .toLowerCase()
              .includes(props.SearchText.toLowerCase().trim())
        )
        .map((el, i) => (
          <MovieCard key={i} movie={el} />
        ))}
        <AddMovie />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    moviesToDisplay: state.moviesToDisplay,
    rating: state.rating,
    SearchText: state.SearchText,
  };
};

export default withLoader(connect(mapStateToProps)(MovieList));
