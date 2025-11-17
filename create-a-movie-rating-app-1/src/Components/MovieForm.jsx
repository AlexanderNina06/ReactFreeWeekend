const genres = [
  "Drama",
  "Crime",
  "Action",
  "Comedy",
  "Thriller",
  "Horror",
  "Sci-Fi",
  "Fantasy",
  "Romance",
];

export default function MovieForm({ movie, onSave, onCancel }) {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    
    const movieData = {
      name: formData.get('name'),
      description: formData.get('description'),
      image: formData.get('image'),
      genres: formData.getAll('genres'), 
      inTheaters: formData.get('inTheaters') === 'on', 
      rating: formData.get('rating')
    };
    
    onSave(movieData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form className="movie-form-container" onSubmit={handleSubmit}>
     
      <div className="movie-form-input-wrapper">
        <label htmlFor="name" className="movie-form-label">
          Movie Name
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="movie-form-input"
          defaultValue={movie?.name || ''}
          placeholder="Enter movie name"
          required
        />
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="description" className="movie-form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="movie-form-textarea"
          defaultValue={movie?.description || ''}
          placeholder="Enter movie description"
        />
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="image" className="movie-form-label">
          Image URL
        </label>
        <input
          id="image"
          type="url"
          name="image"
          className="movie-form-input"
          defaultValue={movie?.image || ''}
          placeholder="https://example.com/poster.jpg"
        />
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="genres" className="movie-form-label">
          Genres (select one or more)
        </label>
        <select
          id="genres"
          name="genres"
          multiple
          className="movie-form-select"
          defaultValue={movie?.genres || []}
          size="5"
        >
          {genres.map((genre) => (
            <option key={genre} value={genre}>
              {genre}
            </option>
          ))}
        </select>
        <p className="text-xs text-gray-500 mt-1">
          Hold Ctrl (Cmd on Mac) to select multiple genres
        </p>
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="rating" className="movie-form-label">
          Rating
        </label>
        <select
          id="rating"
          name="rating"
          className="movie-form-select"
          defaultValue={movie?.rating || ''}
        >
          <option value="">Select rating...</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="inTheaters" className="movie-form-checkbox-label">
          <input
            id="inTheaters"
            type="checkbox"
            name="inTheaters"
            className="movie-form-checkbox"
            defaultChecked={movie?.inTheaters || false}
          />
          <span className="movie-form-label">Currently in theaters</span>
        </label>
      </div>

      <div className="movie-form-actions-wrapper">
        <button type="button" className="btn btn-secondary" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          {movie ? 'Update Movie' : 'Add Movie'}
        </button>
      </div>
    </form>
  );
}