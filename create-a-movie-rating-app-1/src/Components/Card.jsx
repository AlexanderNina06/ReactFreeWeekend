import "../index.css";

export default function Card({
  id,
  name, 
  description, 
  genres, 
  image, 
  inTheaters, 
  rating,
  onEdit,
  onRemove,
  onRatingChange
}) {
  
  const handleStarClick = (starIndex) => {
    const newRating = starIndex + 1;
    onRatingChange(newRating);
  };

  return (
    <div className="movie-card">
      <div className="movie-poster-wrapper">
        {image ? (
          <img 
            src={image} 
            alt={name + " Movie Poster"}
            className="movie-poster" 
          />
        ) : (
          <div className="no-image-placeholder">
            No Image
          </div>
        )}

        {rating > 0 && (
          <div className="rating-badge">
            <span className="rating-star">★</span>
            <span className="rating-number">{rating}</span>
          </div>
        )}

        {inTheaters && (
          <div className="now-playing-badge">
            Now Playing
          </div>
        )}
      </div>
      
      <div className="movie-info">
        <h2 className="movie-title">{name}</h2>
        
        <div className="genre-tags">
          {genres.map((genre, index) => (
            <button key={index} className="genre-tag">
              {genre}
            </button>
          ))}
        </div>
        
        <p className="movie-description">
          {description}
        </p>
        
        <div className="rating-section">
          <span className="rating-label">Rating: {rating || 0}/5</span>
          <div className="stars">
            {Array(5).fill(null).map((_, index) => {
              const isFilled = rating && index < rating;
              return (
                <span
                  key={index} 
                  className={`star ${isFilled ? 'filled' : 'empty'}`}
                  onClick={() => handleStarClick(index)}
                  style={{ cursor: 'pointer' }}
                >
                  ★
                </span>
              );
            })}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex gap-2 mt-4">
          <button 
            className="btn btn-primary flex-1"
            onClick={onEdit}
          >
            Edit
          </button>
          <button 
            className="btn btn-secondary flex-1"
            onClick={onRemove}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}