import "../index.css";

export default function Card({name, description, genres, image, inTheaters, rating}){
  
  return (
    <>
      <div className="movie-card">
        <div className="movie-poster-wrapper">
          <img 
            src={image ? image : "No Image"} 
            alt={name + " Movie Poster"}
            className="movie-poster" 
          />

          {rating && (
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
                  >
                    ★
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}