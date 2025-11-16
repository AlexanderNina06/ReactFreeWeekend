import "../index.css";

export default function Card({name, description, genres, image, inTheaters, rating}){
  
  const StarsCounter = (currentRating) => {
    return Array(5).fill(null).map((_, index) => {
      const isFilled = index < currentRating;
      
      return (
        <span
          key={index} 
          className={`star ${isFilled ? 'filled' : 'empty'}`}
        >
          ★
        </span>
      );
    });
  };
  
  return (
    <>
      <div className="movie-card">
        <img 
          src={image} 
          alt={name + " Movie Poster"}
          className="movie-poster" 
        />       
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
            <span className="rating-label">Rating: {rating}/5</span>
            <div className="stars">
              {StarsCounter(rating)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}