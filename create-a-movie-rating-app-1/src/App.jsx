import { ALL_MOVIES } from "./data/movies";
import Card from "./Components/Card"
import Modal from "./Components/ui/Modal";
import MovieForm from "./Components/MovieForm";
import { useState } from 'react';

export default function App() {
  const [movies, setMovies] = useState(ALL_MOVIES.items);
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  // Abrir modal para agregar película
  const handleAddMovie = () => {
    setCurrentMovie(null);
    setShowMovieForm(true);
  };

  // Abrir modal para editar película
  const handleEditMovie = (movie) => {
    setCurrentMovie(movie);
    setShowMovieForm(true);
  };

  // Guardar película (agregar o editar)
  const handleSaveMovie = (movieData) => {
    if (currentMovie) {
      // Editar película existente
      setMovies(prevMovies => 
        prevMovies.map(movie => 
          movie.id === currentMovie.id 
            ? { ...movie, ...movieData }
            : movie
        )
      );
    } else {
      // Agregar nueva película
      const newMovie = {
        id: Date.now(), // ID temporal
        ...movieData
      };
      setMovies(prevMovies => [...prevMovies, newMovie]);
    }
    setShowMovieForm(false);
    setCurrentMovie(null);
  };

  // Cancelar y cerrar modal
  const handleCancelMovie = () => {
    setShowMovieForm(false);
    setCurrentMovie(null);
  };

  // Eliminar película
  const handleRemoveMovie = (movieId) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  };

  // Actualizar rating de una película
  const handleUpdateRating = (movieId, newRating) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, rating: newRating }
          : movie
      )
    );
  };

  // Limpiar todos los ratings
  const handleRemoveAllRatings = () => {
    setMovies(prevMovies =>
      prevMovies.map(movie => ({ ...movie, rating: 0 }))
    );
  };

  return (
    <div className="app">
      <div className="flex gap-3 mb-6">
        <button className="btn btn-primary" onClick={handleAddMovie}>
          Add Movie
        </button>
        <button className="btn btn-secondary" onClick={handleRemoveAllRatings}>
          Remove All Ratings
        </button>
      </div>
      
      <Modal
        isOpen={showMovieForm}
        onClose={handleCancelMovie}
        title={currentMovie?.id ? "Edit Movie" : "Add Movie"}
      >
        <MovieForm 
          movie={currentMovie}
          onSave={handleSaveMovie}
          onCancel={handleCancelMovie}
        />
      </Modal>

      <div className="movie-list">
        {movies.map((movie) => (
          <Card 
            key={movie.id}
            id={movie.id}
            name={movie.name}
            description={movie.description}
            image={movie.image}
            genres={movie.genres}
            inTheaters={movie.inTheaters}
            rating={movie.rating}
            onEdit={() => handleEditMovie(movie)}
            onRemove={() => handleRemoveMovie(movie.id)}
            onRatingChange={(newRating) => handleUpdateRating(movie.id, newRating)}
          />
        ))}
      </div>
    </div>
  );
}