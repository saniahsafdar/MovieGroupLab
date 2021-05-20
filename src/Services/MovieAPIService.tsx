import {Movie} from "../Model/Movie"

const movieAPIKey: string = process.env.REACT_APP_MOVIE_API_CREDENTIALS || "";

export function fetchByYear(year: number, genre: number, maxRuntime: number): Promise<Movie[]> {
    return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&primary_release_year=${year}&with_runtime.lte=${maxRuntime}&api_key=${movieAPIKey}`)

    .then(res => res.json()) 
    .then(data => {
        return data.results;
    }) 
}