import { ALL_MOVIES } from "../../data/movies";

export async function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ALL_MOVIES.items);
    }, 1000);
  });
}