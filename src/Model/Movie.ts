export interface Movie {
    id?: number;
    title: string;
    genres: Genre[];
    overview: string;
    release_date: string;
    runtime:number;
    poster_path: string;
}

export interface Genre {
    id?:number;
    name:string;
}