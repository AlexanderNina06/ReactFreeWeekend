
interface MovieRatingDisplayProps {
  rating: number;
  onRatingChange?: (newRating: number) => void;
  interactive?: boolean;
}

export default function MovieRatingDisplay({ 
  rating, 
  onRatingChange, 
  interactive = false 
}: MovieRatingDisplayProps) {
  const handleStarClick = (starIndex: number): void => {
    if (interactive && onRatingChange) {
      const newRating = starIndex + 1;
      onRatingChange(newRating);
    }
  };

  return (
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
              style={{ cursor: interactive ? 'pointer' : 'default' }}
            >
              ★
            </span>
          );
        })}
      </div>
    </div>
  );
}