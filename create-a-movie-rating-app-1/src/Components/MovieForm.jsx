import { useState } from 'react';

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
  const [formData, setFormData] = useState({
    name: movie?.name || '',
    description: movie?.description || '',
    image: movie?.image || '',
    genres: movie?.genres || [],
    inTheaters: movie?.inTheaters || false,
    rating: movie?.rating || ''
  });

  const [errors, setErrors] = useState({
    name: '',
    genres: ''
  });

  const validateForm = () => {
    const newErrors = {
      name: '',
      genres: ''
    };

    let isValid = true;

    // Validar nombre (requerido)
    if (!formData.name.trim()) {
      newErrors.name = 'Movie name is required';
      isValid = false;
    }

    if (formData.genres.length === 0) {
      newErrors.genres = 'Please select at least one genre';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const clearError = (fieldName) => {
    if (errors[fieldName]) {
      setErrors(prev => ({
        ...prev,
        [fieldName]: ''
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    clearError(name);
  };

  const handleGenreChange = (e) => {
    const selected = Array.from(e.target.selectedOptions, option => option.value);
    
    setFormData(prev => ({
      ...prev,
      genres: selected
    }));

    if (selected.length > 0) {
      clearError('genres');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return; 
    }

    onSave(formData);
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <form className="movie-form-container" onSubmit={handleSubmit}>
     
      <div className="movie-form-input-wrapper">
        <label htmlFor="name" className="movie-form-label">
          Movie Name *
        </label>
        <input
          id="name"
          type="text"
          name="name"
          className="movie-form-input"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter movie name"
        />
        {errors.name && (
          <p className="movie-form-error">{errors.name}</p>
        )}
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="description" className="movie-form-label">
          Description
        </label>
        <textarea
          id="description"
          name="description"
          className="movie-form-textarea"
          value={formData.description}
          onChange={handleChange}
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
          value={formData.image}
          onChange={handleChange}
          placeholder="https://example.com/poster.jpg"
        />
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="genres" className="movie-form-label">
          Genres (select one or more) *
        </label>
        <select
          id="genres"
          name="genres"
          multiple
          className="movie-form-select"
          value={formData.genres}
          onChange={handleGenreChange}
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
        {errors.genres && (
          <p className="movie-form-error">{errors.genres}</p>
        )}
      </div>

      <div className="movie-form-input-wrapper">
        <label htmlFor="rating" className="movie-form-label">
          Rating
        </label>
        <select
          id="rating"
          name="rating"
          className="movie-form-select"
          value={formData.rating}
          onChange={handleChange}
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
            checked={formData.inTheaters}
            onChange={handleChange}
          />
          <span className="movie-form-label">Currently in theaters</span>
        </label>
      </div>

      {/* Form Actions */}
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