// src/services/movies-service.ts
import { ALL_MOVIES } from "../../data/movies";
import { Movie } from "../types/movie";

export async function getMovies(): Promise<Movie[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_MOVIES.items);
    }, 1000);
  });
}

export async function getMovie(id: string | number): Promise<Movie> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = ALL_MOVIES.items.find(m => m.id === parseInt(id.toString()));
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error('Movie not found'));
      }
    }, 800);
  });
}