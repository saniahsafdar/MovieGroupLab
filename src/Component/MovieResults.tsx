import React, { useEffect, useState } from "react";
import { Movie, Genre } from "../Model/Movie";
import { fetchByAll, fetchByYear } from "../Services/MovieAPIService";
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

  useEffect(() => {
    fetchByAll(year, genre, maxRuntime).then((data) => {
      setMovies(data);
    });
  }, [year, genre, maxRuntime]);



  return (
    <div className="WatchListDiv">
      <h2>Search Results</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id} onClick={() => setSelectedMovie(movie)}>
            {movie.title}
          </li>
        ))}
        {selectedMovie && <MovieDetails movie={selectedMovie} />}
      </ol>
      
    </div>
  );
}

export default MovieResults;
