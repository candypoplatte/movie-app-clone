import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';

const movies = [
  {
    "title": "God Father",
    "poster": "https://images-na.ssl-images-amazon.com/images/I/41a37t9BwTL.jpg"
  },
  {
    "title": "Superman",
    "poster": "https://i.ebayimg.com/00/s/NTAwWDMzOA==/z/7WQAAMXQ74JTWIJr/$_35.JPG?set_id=2"
  },
  {
    "title": "Batman",
    "poster": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk8Q7FkVG4FCT-fsxJwTLYImZc4bUGrvMmDgKFpNBbhUm-oesU"
  },
  {
    "title": "Ironman",
    "poster": "https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/2/25/Iron_Man_poster_3.png/revision/latest?cb=20120420114513"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        {movies.map((movie, index) => { 
          return <Movie title={movie.title} poster={movie.poster} key={index} />
        })}
      </div>
    );
  }
}

export default App;
