import { ALL_MOVIES } from "./data/movies";
import Card from "./Components/Card"
import Modal from "./Components/ui/Modal";
import MovieForm from "./Components/MovieForm";
import { useState } from 'react';

export default function App() {
  const movies = ALL_MOVIES.items;
  const [showMovieForm, setShowMovieForm] = useState(false);
  const currentMovie = null;

  const handleSaveMovie = (movieData) => {
    console.log(movieData);
    setShowMovieForm(false); 
  };

  const handleCancelMovie = () => {
    console.log('cancel');
    setShowMovieForm(false); 
  };

  return (
   <div className="app">
      <button className="btn btn-primary" onClick={() => setShowMovieForm(true)}>
        Add Movie
      </button>
      
      <Modal
        isOpen={showMovieForm}
        onClose={() => setShowMovieForm(false)}
        title={currentMovie?.id ? "Edit Movie" : "Add Movie"}
      >
        <MovieForm 
          movie={currentMovie}
          onSave={handleSaveMovie}
          onCancel={handleCancelMovie}
        />
      </Modal>

      <div className="movie-list">
        {movies.map((element) => (
          <Card 
            key={element.id}
            name={element.name}
            description={element.description}
            image={element.image}
            genres={element.genres}
            inTheaters={element.inTheaters}
            rating={element.rating}
          />
        ))}
      </div>
    </div>
  );
}