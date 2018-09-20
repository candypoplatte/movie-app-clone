import React, { Component } from 'react';
import './Movie.css';

class Movie extends Component {
  render() {
    return (
      <div>
        <MoviePoster />
        <h1>{this.props.title}</h1>
      </div>
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
