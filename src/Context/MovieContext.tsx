import { createContext, ReactNode, useState } from "react"
import {Movie} from "../Model/Movie";

// Lists what is going to be in our context
interface MovieContextValue {
  favoriteMovies: Movie[];
  addMovie: (movie: Movie) => void;
  removeMovie: (movie: Movie) => void;
  isOnList: (movie: Movie) => boolean
}

// necessary to provide blank/default values
const defaultValue: MovieContextValue = {
  favoriteMovies: [],
  addMovie: () => {},
  removeMovie: () => {},
  isOnList: () => {return false}
}

// Here is the actual context object.
export const MovieContext = createContext(defaultValue);


export function MovieContextProvider({ children }: { children: ReactNode }) {
  const [ favoriteMovies, setFavoriteMovies ] = useState<Movie[]>([
  ]);

  function addMovie(movie: Movie): void {
    setFavoriteMovies(prev => [ ...prev, { ...movie}]);
  }

  function removeMovie(movie: Movie): void {
    const index = favoriteMovies.indexOf(movie)
    setFavoriteMovies(prevMovie => [
          ...prevMovie.slice(0,index),
          ...prevMovie.slice(index+1)
      ])
  }

  function isOnList(movie: Movie):boolean {
    return favoriteMovies.some(movie => movie.id === movie.id)
  }

  return (
    <MovieContext.Provider value={{favoriteMovies, addMovie, removeMovie, isOnList}} >
      {children}
    </MovieContext.Provider>
  );
}

