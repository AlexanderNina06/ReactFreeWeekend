// src/components/Card.tsx
import { Link } from "react-router-dom";
import { Movie } from "../types/movie";
import MovieImage from "./MovieImage";
import Tag from "./Tag";
import MovieRatingDisplay from "./MovieRatingDisplay";

interface CardProps {
  id: number;
  name: string;
  description: string;
  genres: string[];
  image: string;
  inTheaters: boolean;
  rating: number;
  onEdit: () => void;
  onRemove: () => void;
  onRatingChange: (newRating: number) => void;
}

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
}: CardProps) {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <MovieImage 
          image={image}
          name={name}
          rating={rating}
          inTheaters={inTheaters}
        />
      </Link>
      
      <div className="movie-info">
        <Link to={`/movie/${id}`}>
          <h2 className="movie-title hover:text-blue-600 transition-colors">
            {name}
          </h2>
        </Link>
        
        <div className="genre-tags">
          {genres.map((genre, index) => (
            <Tag key={index}>{genre}</Tag>
          ))}
        </div>
        
        <p className="movie-description">
          {description}
        </p>
        
        <MovieRatingDisplay 
          rating={rating}
          onRatingChange={onRatingChange}
          interactive={true}
        />

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