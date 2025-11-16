import { ALL_MOVIES } from "./data/movies";
import Card from "./Components/Card"
/*
 This is an Icon that you can use to represent the stars if you like.
 Otherwise, you could use a simple ⭐️ emoji, or * character.
*/
// import { StarIcon } from "@heroicons/react/24/solid";

export default function App() {
  const movies = ALL_MOVIES.items;

  return (
   <div className="app">
      <div className="movie-list">
        {movies.map((element) => (
          <Card 
            key={element.id}
            name={element.name}
            description={element.description}
            image={element.image}
            genres={element.genres}
            inTheaters={element.inTheaters}
            rating={element.rating}
          />
        ))}
      </div>
    </div>
  );
}
