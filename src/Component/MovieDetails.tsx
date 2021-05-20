import {Movie} from "../Model/Movie";
import { useParams } from "react-router";
import { useContext } from "react";

interface Props{
    movies: Movie[] 
}

interface RouteParams {
    id: string;
  }


function MovieDetails ({movies}:Props) {
    const { id } = useParams<RouteParams>();

    function getMovieById(movieId: number): Movie|undefined {
        return movies.find(movie => movie.id === movieId);
      }
    const movie = getMovieById(parseInt(id));
    
    return (
        <div className="MovieDetails">
            <div>
            <h2>{movie?.title}</h2>
            <h3>{movie?.tagline}</h3>
            <p>{movie?.runtime}</p>
            </div>

            <div>
                <p>{movie?.genres[0].name}</p>
                <p>{movie?.overview}</p>
            </div>
            <button>Add to Watchlist</button>
        </div>
    )
}

export default MovieDetails

