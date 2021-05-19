import { useEffect, useState } from "react";
import {Movie, Genre} from "../Model/Movie";
import {fetchByYear} from "../Services/MovieAPIService";




function DisplayWatchList () {
    const [movie, setMovie] = useState<Movie[]>([]);
    const [year, setYear] = useState(2000)
    useEffect(() => {
        fetchByYear(year).then((data) => {
            setMovie(data)
        })
    }, []);
    
    
    return (
        <div className="WatchListDiv">
            <h2>Watch List</h2>
            <ol>
                {movie.map((movie) => {
                    <li>{movie.title}</li>
                })}
            </ol>

        </div>
    )
}

export default DisplayWatchList