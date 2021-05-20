import { useEffect, useState } from "react";
import { Movie, Genre } from "../Model/Movie";
import { fetchByYear } from "../Services/MovieAPIService";

interface Props {
  year: number;
  genre: number;
  maxRuntime: number;
}

function MovieResults({ year, genre, maxRuntime }: Props) {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    fetchByYear(year,genre,maxRuntime).then((data) => {
      setMovies(data);
    });
  }, [year,genre,maxRuntime]);

  return (
    <div className="WatchListDiv">
      <h2>Watch List</h2>
      <ol>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ol>
    </div>
  );
}

export default MovieResults;
