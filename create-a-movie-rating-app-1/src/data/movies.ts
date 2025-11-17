import { Movie } from '../types/movie';

interface MoviesData {
  items: Movie[];
}

export const ALL_MOVIES: MoviesData = {
  items: [
    {
      id: 1,
      name: "The Shawshank Redemption",
      description: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      image: "https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
      genres: ["Drama"],
      inTheaters: false,
      rating: 5
    },
    {
      id: 2,
      name: "The Godfather",
      description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
      genres: ["Crime", "Drama"],
      inTheaters: false,
      rating: 5
    },
  ]
};