import {Movie} from "../Model/Movie"

const movieAPIKey: string = process.env.REACT_APP_MOVIE_API_CREDENTIALS || "";

export function fetchByAll(year: string, genre: string, maxRuntime: string): Promise<Movie[]> {
    return fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&with_genres=${genre}&primary_release_year=${year}&with_runtime.lte=${maxRuntime}&api_key=${movieAPIKey}`)

    .then(res => res.json()) 
    .then(data => {
        return data.results;
    }) 
}

// export function fetchByGenre(genre:number): Promise<Movie[]>{
//     return fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${genre}&api_key=${movieAPIKey}`)
//     .then(res => res.json()) 
//     .then(data => {
//         return data.results;
//     }) 
// }

// export function fetchByRuntime(maxRuntime: number): Promise<Movie[]>{
//     return fetch(`https://api.themoviedb.org/3/discover/movie?with_runtime.lte=${maxRuntime}&api_key=${movieAPIKey}`)
//     .then(res => res.json()) 
//     .then(data => {
//         return data.results;
//     }) 
// }

// export function fetchByYear(year: number): Promise<Movie[]>{
//     return fetch(`https://api.themoviedb.org/3/discover/movie?primary_release_year=${year}&api_key=${movieAPIKey}`)
//     .then(res => res.json()) 
//     .then(data => {
//         return data.results;
//     }) 
// }
