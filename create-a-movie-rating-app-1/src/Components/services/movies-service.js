import { ALL_MOVIES } from "../../data/movies";

export async function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_MOVIES.items);
    }, 1000);
  });
}

export async function getMovie(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const movie = ALL_MOVIES.items.find(m => m.id === parseInt(id));
      if (movie) {
        resolve(movie);
      } else {
        reject(new Error('Movie not found'));
      }
    }, 800);
  });
}