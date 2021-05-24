import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import MovieDetails from "../Component/MovieDetails";
import {Movie} from "../Model/Movie";
import DeleteIcon from '@material-ui/icons/Delete';
import './DisplayWatchList.css';


function DisplayWatchList() {
  const { favoriteMovies, removeMovie } = useContext(MovieContext);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  return (
    <div>
      <h2>Your Watchlist</h2>
      <div className="watchListHeader">
        <p className="headerForDetails">Click for more details</p>
        <p className="headerForAdd">Remove from watchlist</p>
      </div>
      <ul>
        {favoriteMovies.map((movie) => (
          <li key={movie.id} ><span onClick={() => setSelectedMovie(movie)}>{movie.title}</span>
            
            {/* <button className="RemoveButton" onClick={() => removeMovie(movie)}>Remove from List</button> */}
            <button onClick={() => removeMovie(movie)} className="removeButton"><DeleteIcon color="primary" className="RemoveIcon" /></button>
          </li>
        ))}
      </ul>
      {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)} />}

    </div>
  );
}


export default DisplayWatchList