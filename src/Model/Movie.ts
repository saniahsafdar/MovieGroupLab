export default interface Movie {
    id?: number;
    title: string;
    genres: Genre[];
    overview: string;
    release_date: string;
    runtime:number;
    tagline:string;
    poster_path: string;
}


interface Genre {
    id?:number;
    name:string;
}