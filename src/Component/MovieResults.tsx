import { useEffect, useState } from "react";
import { Movie } from "../Model/Movie";
import { fetchByAll } from "../Services/MovieAPIService";
import MovieDetails from "./MovieDetails";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import StarsIcon from '@material-ui/icons/Stars';
import './MovieResults.css';

interface Props {
  year: number;
  genre: number;
  maxRuntime: number;
}

function MovieResults({ year, genre, maxRuntime }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [onWatchList, setOnWatchList] = useState(false);
  const { favoriteMovies, addMovie, removeMovie, isOnList } = useContext(MovieContext);

  useEffect(() => {
    fetchByAll(year, genre, maxRuntime).then((data) => {
      setMovies(data);
    });
  }, [year, genre, maxRuntime]);

  function OnClickAdd(movie: Movie) {
    addMovie(movie);
    setOnWatchList(true)
  }
  function OnClickRemove(movie: Movie) {
    removeMovie(movie);
    // setOnWatchList(false);
  }



  return (
    <div className="WatchListDiv">
      {movies.length > 0 && <>
        <h2>Search Results</h2>
        <div className="resultsHeader">
          <p className="headerForDetails">Click title for details</p>
          <p className="headerForAdd">Add to my watchlist</p>
        </div> 
      </>}
          <ul className="resultsList">
            {movies.map((movie) => (
              <li key={movie.id}>
                <span onClick={() => setSelectedMovie(movie)}> {movie.title} </span>
                {/* {!onWatchList &&
                <button onClick={() => {OnClickAdd(movie);}}>{" "} Add to Watchlist </button>}</li>))}
                {!onWatchList && */}
                <p className="addIcon"><StarsIcon color="primary" onClick={() => {OnClickAdd(movie);}}/></p>
                
              </li>))}

            
            {selectedMovie && <MovieDetails movie={selectedMovie} onClose={() => setSelectedMovie(null)}/>}
      
      </ul>
    </div>
  );
}

export default MovieResults;
//{onWatchList === false &&
{
  /* <button onClick={() => {removeMovie(movie)}} >Remove from Watchlist</button> */
}
