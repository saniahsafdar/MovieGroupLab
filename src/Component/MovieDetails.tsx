import {Movie} from "../Model/Movie";
import { useParams } from "react-router";
import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./MovieDetails.css"

interface Props{
    movie: Movie 
}

function MovieDetails ({movie}:Props) {
    const { favoriteMovies, addMovie , removeMovie } = useContext(MovieContext);
    const [onWatchList, setOnWatchList] = useState(false);

    const date = movie.release_date.substring(0,4);
    
    // setOnWatchList(favoriteMovies.includes(movie)); 
    
    function OnClick () {
        addMovie(movie);
        setOnWatchList(true)
    }


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
            {onWatchList===false &&<button onClick={OnClick} > Add to Watchlist</button>}
            <button onClick={() => removeMovie(movie)} >Remove from Watchlist</button>
        </div>
    )
}

export default MovieDetails

// {onWatchList===false &&