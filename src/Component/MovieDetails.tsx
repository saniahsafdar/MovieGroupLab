import {Movie} from "../Model/Movie";
import { useParams } from "react-router";
import { useContext, useState } from "react";
import { MovieContext } from "../Context/MovieContext";
import "./MovieDetails.css"
import CloseIcon from '@material-ui/icons/Close';

interface Props{
    movie: Movie;
    onClose: () => void; 
}

function MovieDetails ({movie, onClose}:Props) {
    const { favoriteMovies, addMovie , removeMovie } = useContext(MovieContext);
    

    const date = movie.release_date.substring(0,4);
    
    // setOnWatchList(favoriteMovies.includes(movie)); 
    



    return (
        <div className="MovieDetails">
            <div className="modalContent">
                <div className="close"><CloseIcon color="primary" onClick={onClose}/></div>
                <h2 className="detailsTitle">{movie.title}</h2>
                <p>{date}</p>
                <p className="overview">{movie.overview}</p>
                <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}></img>
            </div>

        </div>
    )
}

export default MovieDetails

// {onWatchList===false &&