import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

function DisplayWatchList() {
  const { favoriteMovies, removeMovie } = useContext(MovieContext);

  return (
    <div>
      <p>Your Watchlist!</p>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id}>
            {movie.title}
            <button className="RemoveButton" onClick={() => removeMovie(movie)}>Remove from List</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default DisplayWatchList