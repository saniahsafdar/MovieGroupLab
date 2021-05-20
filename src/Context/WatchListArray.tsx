// import {Movie} from "../Model/Movie"
// import { createContext, ReactNode, useState } from "react"
export {}

// // Lists what is going to be in our context
// interface MovieContextValue {
//   movies: Movie[];
//   getMovieById: (movieId: number) => Movie |undefined;
// }

// // necessary to provide blank/default values
// const defaultValue: MovieContextValue = {
//   movies: [],
//   getMovieById: () => undefined
// }

// // Here is the actual context object.
// export const MovieContext = createContext(defaultValue);

// export function MvoieContextProvider({ children }: { children: ReactNode }) {
// //   const [ flavors, setFlavors ] = useState<Flavor[]>([
// //     { id: 1, name: "Chocolate", color: "brown", votes: 0 },
// //     { id: 2, name: "Strawberry", color: "pink", votes: 0 },
// //     { id: 3, name: "Mint", color: "palegreen", votes: 0 },
// //   ]);


//   function getMovieById(movieId: number , movies: Movie[]): Movie|undefined {
//     return movies.find(movie => movie.id === movieId);
//   }

// //   return (
// //     <MovieContext.Provider  >
// //       {children}
// //     </MovieContext.Provider>
// //   );