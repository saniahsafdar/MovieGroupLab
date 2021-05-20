import {Movie} from "../Model/Movie"

const movieAPIKey: string = process.env.REACT_APP_MOVIE_API_CREDENTIALS || "";

export function fetchByYear(year: number): Promise<Movie[]> {
    return fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&api_key=${movieAPIKey}`)

    .then(res => res.json()) 
    .then(data => {
        return data.results;
    }) 
}