// src/pages/MovieDetailPage.tsx
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getMovies } from '../Components/services/movies-service';
import { useFetch } from '../hooks/useFetch';
import { Movie } from '../types/movie';
import MovieImage from '../Components/MovieImage';
import Tag from '../Components/Tag';
import MovieRatingDisplay from '../Components/MovieRatingDisplay';
import Skeleton from '../Components/ui/Skeleton';

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Crear función de fetch que maneja el caso de id undefined
  const fetchMovie = async (): Promise<Movie | null> => {
    if (!id) {
      throw new Error('Movie ID is required');
    }
    return getMovie(id);
  };
  
  const { data: movie, isLoading, error } = useFetch<Movie | null>(
    fetchMovie,
    null
  );

  if (error) {
    return (
      <div className="w-full max-w-4xl mx-auto p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <h2 className="text-2xl font-bold text-red-800 mb-2">Movie Not Found</h2>
          <p className="text-red-600 mb-4">The movie you're looking for doesn't exist.</p>
          <Link to="/" className="btn btn-primary">
            ← Back to Home
          </Link>
        </div>
      </div>
    );
  }

  if (isLoading || !movie) {
    return <MovieDetailSkeleton />;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <button 
        onClick={() => navigate('/')}
        className="btn btn-secondary mb-6 flex items-center gap-2"
      >
        ← Back to Movies
      </button>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <MovieImage
              image={movie.image}
              name={movie.name}
              rating={movie.rating}
              inTheaters={movie.inTheaters}
            />
          </div>

          <div className="md:w-1/2 p-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {movie.name}
            </h1>

            <div className="flex gap-2 flex-wrap mb-6">
              {movie.genres.map((genre, index) => (
                <Tag key={index}>{genre}</Tag>
              ))}
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {movie.description}
              </p>
            </div>

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                Rating
              </h2>
              <MovieRatingDisplay 
                rating={movie.rating}
                interactive={false}
              />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600 font-medium">Status:</span>
                <span className="font-semibold text-gray-900">
                  {movie.inTheaters ? (
                    <span className="text-red-600">Now in Theaters 🎬</span>
                  ) : (
                    <span className="text-gray-600">Not in Theaters</span>
                  )}
                </span>
              </div>

              <div className="flex items-center justify-between py-3 border-t border-gray-200">
                <span className="text-gray-600 font-medium">Movie ID:</span>
                <span className="font-mono text-sm text-gray-900">
                  #{movie.id}
                </span>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200">
              <Link 
                to="/" 
                className="btn btn-primary w-full text-center block"
              >
                View All Movies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MovieDetailSkeleton() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Skeleton className="h-10 w-40 mb-6" />

      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:w-1/2">
            <Skeleton className="h-96 w-full" />
          </div>

          <div className="md:w-1/2 p-8">
            <Skeleton className="h-10 w-3/4 mb-4" />
            
            <div className="flex gap-2 mb-6">
              <Skeleton className="h-8 w-20 rounded-full" />
              <Skeleton className="h-8 w-24 rounded-full" />
            </div>

            <Skeleton className="h-6 w-32 mb-2" />
            <div className="space-y-2 mb-6">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>

            <Skeleton className="h-6 w-24 mb-2" />
            <Skeleton className="h-8 w-40 mb-6" />

            <Skeleton className="h-12 w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}