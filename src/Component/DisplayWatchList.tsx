import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieDetails from "../Component/MovieDetails";
import {Movie} from "../Model/Movie";

function DisplayWatchList() {
  const { favoriteMovies, removeMovie } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <p>Your Watchlist!</p>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id} onClick={() => setSelectedMovie(movie)}>
            {movie.title}
            <button className="RemoveButton" onClick={() => removeMovie(movie)}>Remove from List</button>
          </li>
        ))}
      </ul>
      {selectedMovie && <MovieDetails movie={selectedMovie} />}

    </div>
  );
}


export default DisplayWatchList