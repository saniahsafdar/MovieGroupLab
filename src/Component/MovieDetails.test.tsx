import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import MovieDetails from './MovieDetails';
import {Movie} from "../Model/Movie";

test('renders overview', () => {
const movie = {id:1, title: "movie1", overview:"overview here", genres:[], release_date: "2000", runtime: 200, poster_path:"path"}
render(<MovieDetails movie = {movie} />);
const overview = screen.getByText("overview here");
expect(overview).toBeInTheDocument();
});

test('renders title', () => {
const movie = {id:1, title: "movie1", overview:"overview here", genres:[], release_date: "2000", runtime: 200, poster_path:"path"}
render(<MovieDetails movie = {movie} />);
const title = screen.getByText("movie1");
expect(title).toBeInTheDocument();
});


test('renders release date', () => {
const movie = {id:1, title: "movie1", overview:"overview here", genres:[], release_date: "2000-10-10", runtime: 200, poster_path:"path"}
render(<MovieDetails movie = {movie} />);
const date = screen.getByText("2000");
expect(date).toBeInTheDocument()
});


test('renders button', () => {
const movie = {id:1, title: "movie1", overview:"overview here", genres:[], release_date: "2000-10-10", runtime: 200, poster_path:"path"}
render(<MovieDetails movie = {movie} />);
const button = screen.getByRole("button");
expect(button).toBeInTheDocument()
});









