import { useState } from 'react';
import { getMovies } from '../Components/services/movies-service'
import { useFetch } from '../hooks/useFetch';
import Card from '../Components/Card';
import Modal from '../Components/ui/Modal';
import MovieForm from '../Components/MovieForm';
import { MovieSkeleton } from '../Components/ui/Skeleton';

export default function HomePage() {
  const { data: movies, setData: setMovies, isLoading } = useFetch(getMovies, []);
  
  const [showMovieForm, setShowMovieForm] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  const calculateStats = () => {
    const totalMovies = movies.length;
    
    const moviesWithRatings = movies.filter(movie => 
      Number.isFinite(movie.rating) && movie.rating > 0
    );
    
    let averageRating = 'N/A';
    
    if (moviesWithRatings.length > 0) {
      const sum = moviesWithRatings.reduce((acc, movie) => acc + movie.rating, 0);
      averageRating = (sum / moviesWithRatings.length).toFixed(1);
    }
    
    return {
      totalMovies,
      averageRating
    };
  };

  const stats = calculateStats();

  const handleAddMovie = () => {
    setCurrentMovie(null);
    setShowMovieForm(true);
  };

  const handleEditMovie = (movie) => {
    setCurrentMovie(movie);
    setShowMovieForm(true);
  };

  const handleSaveMovie = (movieData) => {
    if (currentMovie) {
      setMovies(prevMovies => 
        prevMovies.map(movie => 
          movie.id === currentMovie.id 
            ? { ...movie, ...movieData }
            : movie
        )
      );
    } else {
      const newMovie = {
        id: Date.now(),
        ...movieData
      };
      setMovies(prevMovies => [...prevMovies, newMovie]);
    }
    setShowMovieForm(false);
    setCurrentMovie(null);
  };

  const handleCancelMovie = () => {
    setShowMovieForm(false);
    setCurrentMovie(null);
  };

  const handleRemoveMovie = (movieId) => {
    setMovies(prevMovies => prevMovies.filter(movie => movie.id !== movieId));
  };

  const handleUpdateRating = (movieId, newRating) => {
    setMovies(prevMovies =>
      prevMovies.map(movie =>
        movie.id === movieId
          ? { ...movie, rating: newRating }
          : movie
      )
    );
  };

  const handleRemoveAllRatings = () => {
    setMovies(prevMovies =>
      prevMovies.map(movie => ({ ...movie, rating: 0 }))
    );
  };

  return (
    <>
      <header className="w-full max-w-7xl mb-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎬 Movie Rating App
          </h1>
          
          <div className="flex gap-6 items-center">
            <div className="bg-blue-50 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-600 mb-1">Total Movies</p>
              <p className="text-2xl font-bold text-blue-600">
                {isLoading ? '...' : stats.totalMovies}
              </p>
            </div>
            
            <div className="bg-yellow-50 rounded-lg px-6 py-3">
              <p className="text-sm text-gray-600 mb-1">Average Rating</p>
              <p className="text-2xl font-bold text-yellow-600">
                {isLoading ? '...' : stats.averageRating}
                {!isLoading && stats.averageRating !== 'N/A' && (
                  <span className="text-lg text-yellow-500 ml-1">★</span>
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button 
            className="btn btn-primary" 
            onClick={handleAddMovie}
            disabled={isLoading}
          >
            Add Movie
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={handleRemoveAllRatings}
            disabled={isLoading}
          >
            Remove All Ratings
          </button>
        </div>
      </header>
      
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
        {isLoading ? (
          <>
            {[...Array(8)].map((_, index) => (
              <MovieSkeleton key={index} />
            ))}
          </>
        ) : (
          movies.map((movie) => (
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
          ))
        )}
      </div>
    </>
  );
}