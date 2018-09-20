import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movieTitles = [
  "God Father",
  "Superman",
  "Batman",
  "Ironman"
]

const movieImages = [
  "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg",
  "https://images-na.ssl-images-amazon.com/images/I/51KtPqh3nkL.jpg",
  "https://www.posterduniya.com/wp-content/uploads/2016/10/The-Dark-Knight-Batman-Movie-Official-Poster2.jpg",
  "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Iron_Man_poster_3.png/revision/latest?cb=20120420114513"
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movie title={movieTitles[0]} poster={movieImages[0]} />
        <Movie title={movieTitles[1]} poster={movieImages[1]} />
        <Movie title={movieTitles[2]} poster={movieImages[2]} />
        <Movie title={movieTitles[3]} poster={movieImages[3]} />
      </div>
    );
  }
}

export default App;
