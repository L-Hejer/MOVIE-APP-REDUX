import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { connect } from "react-redux";
import { Search } from "../Redux/actions";

class SearchMovie extends React.Component {
  state = {
    rating: 1,
    SearchText: ""
  };

  onStarClick = nextValue => {
    this.setState({ rating: nextValue }, () =>
      this.props.Search({
        rating: this.state.rating,
        SearchText: this.state.SearchText,
        isLoading: true
      })
    );
    setTimeout(
      () =>
        this.props.Search({
          rating: this.state.rating,
          SearchText: this.state.SearchText,
          isLoading: false
        }),
      1500
    );
  };

  handleSearch = e => {
    this.setState({ SearchText: e.target.value }, () =>
      this.props.Search({
        rating: this.state.rating,
        SearchText: this.state.SearchText,
        isLoading: true
      })
    );
    setTimeout(
      () =>
        this.props.Search({
          rating: this.state.rating,
          SearchText: this.state.SearchText,
          isLoading: false
        }),
      1500
    );
  };

  render() {
    return (
      <div>
        <div className="search-container">
          <input
            type="text"
            placeholder="Type movie name to search"
            onChange={this.handleSearch}
          />
          <StarRatingComponent
            name="Rate"
            className="star-rating"
            starColor="lightskyblue"
            emptyStarColor="grey"
            starCount={5}
            value={this.state.rating}
            onStarClick={this.onStarClick}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesToDisplay: state.moviesToDisplay,
    isLoading: state.isLoading
  };
};
const mapDispatchToProps = dispatch => {
  return {
    Search: payload => dispatch(Search(payload))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(SearchMovie);
