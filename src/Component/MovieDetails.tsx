import {Movie} from "../Model/Movie";
import { useParams } from "react-router";
import { useContext } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./MovieDetails.css"

interface Props{
    movie: Movie 
}

function MovieDetails ({movie}:Props) {
    const { favoriteMovies, addMovie } = useContext(MovieContext);

    const date = movie.release_date.substring(0,4);
    
    return (
        <div className="MovieDetails">
            <div>
            <h2>{movie.title}</h2>
            <p>{date}</p>
            </div>

            <div>
               <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
                <p>{movie.overview}</p>
            </div>
            <button onClick={() => addMovie(movie)} >Add to Watchlist</button>
        </div>
    )
}

export default MovieDetails

