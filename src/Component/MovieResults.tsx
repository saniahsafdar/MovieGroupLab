import { useEffect, useState } from "react";
import {Movie, Genre} from "../Model/Movie";
import {fetchByYear} from "../Services/MovieAPIService";




function MovieResults () {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [year, setYear] = useState(2000)
    useEffect(() => {
        fetchByYear(year).then((data) => {
            setMovies(data)
            
        })
    }, [year]);
    
    
    
    return (
        <div className="WatchListDiv">
            <h2>Watch List</h2>
            <ol>
                {movies.map((movie) => 
                    <li key={movie.id}>{movie.title}</li>
                )}
                
            </ol>

        </div>
    )
}

export default MovieResults