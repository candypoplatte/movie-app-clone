import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <h1>This is 'Movie' component.</h1>
    );
  }
}

class MoviePoster extends Component {
  render() {
    return (
      <img src="https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg" />
    );
  }
}

export default Movie;
