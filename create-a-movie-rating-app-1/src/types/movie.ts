export interface Movie {
  id: number;
  name: string;
  description: string;
  image: string;
  genres: string[];
  inTheaters: boolean;
  rating: number;
}

export interface MovieFormData {
  name: string;
  description: string;
  image: string;
  genres: string[];
  inTheaters: boolean;
  rating: number | string;
}

export interface MovieStats {
  totalMovies: number;
  averageRating: string | number;
}