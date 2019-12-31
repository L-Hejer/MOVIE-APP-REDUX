import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import SearchMovie from "./Components/Search";
import MovieList from "./Components/MovieList";
import MovieLink from "./Components/LinkToMovie";

import { connect } from "react-redux";

function App(props) {
  return (
    <div className="App">
      <SearchMovie />
      <Route 
      exact path ="/"
      render={() => <MovieList isLoading={props.isLoading} />} 
      />

{props.moviesToDisplay.map(movie => (
        <Route
          key={movie.id}
          path={`/${movie.id}`}
          render={() => (
            <div>
              <MovieLink movie={movie} />
            </div>
          )}
        />
      ))}
      
    </div>
  );
}

const mapStateToProps = state => {
  return {
    moviesToDisplay: state.moviesToDisplay,
    isLoading: state.isLoading
  };
};

export default connect(mapStateToProps)(App);
