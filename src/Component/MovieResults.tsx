import React, { useEffect, useState } from "react";
import { Movie, Genre } from "../Model/Movie";
import { fetchByAll } from "../Services/MovieAPIService";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";

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
      <h2>Search Results</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>
            <span onClick={() => setSelectedMovie(movie)}> {movie.title} </span>
            {!onWatchList &&
            <button onClick={() => {OnClickAdd(movie);}}>{" "} Add to Watchlist </button>}</li>))}
        
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      
      </ol>
    </div>
  );
}

export default MovieResults;
//{onWatchList === false &&
{
  /* <button onClick={() => {removeMovie(movie)}} >Remove from Watchlist</button> */
}
