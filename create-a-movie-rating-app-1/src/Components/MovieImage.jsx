export default function MovieImage({ image, name, rating, inTheaters }) {
  return (
    <div className="movie-poster-wrapper">
      {image ? (
        <img 
          src={image} 
          alt={`${name} Movie Poster`}
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
  );
}