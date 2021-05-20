import React, { useEffect, useState } from "react";
import { Movie, Genre } from "../Model/Movie";
import { fetchByYear } from "../Services/MovieAPIService";
import { Link } from "react-router-dom";
import MovieDetails from "./MovieDetails";

interface Props {
  year: number;
  genre: number;
  maxRuntime: number;
}

function MovieResults({ year, genre, maxRuntime }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  useEffect(() => {
    fetchByYear(year, genre, maxRuntime).then((data) => {
      setMovies(data);
    });
  }, [year, genre, maxRuntime]);

  console.log(selectedMovie)

  return (
    <div className="WatchListDiv">
      <h2>Watch List</h2>
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
