import { FormEvent, useState } from "react";
import MovieResults from "./MovieResults";

function MovieForm() {
  const [year, setYear] = useState(0)
  const [submittedYear, setSubmittedYear] = useState(0)
  const [genre, setGenre] = useState(0)
  const [submittedGenre, setSubmittedGenre] = useState(0)
  const [maxRuntime, setMaxRuntime] = useState(0)
  const [submittedMaxRuntime, setSubmittedMaxRuntime] = useState(0)

  
  function handleSubmit(e:FormEvent) {
    e.preventDefault();
    setSubmittedYear(year)
    setSubmittedGenre(genre)
    setSubmittedMaxRuntime(maxRuntime)
  }
  
  
  return (
    <div>
    <form className="MovieForm" onSubmit={handleSubmit}>
      <h1>What to Watch</h1>
      <div>
        <label>
          Year
          <input type="number" value={year} onChange={e => setYear(Number(e.target.value))} />
        </label>

        <label>
          Maximum Runtime
          <input type="number" value={maxRuntime} onChange={e => setMaxRuntime(Number(e.target.value))}/>
        </label>        

        <div>
          <p>Select a genre!</p>
        <input type="radio" value="18" name="genre" onChange={e => setGenre(Number(e.target.value))} /> Drama
        <input type="radio" value="28" name="genre" onChange={e => setGenre(Number(e.target.value))} /> Action
        <input type="radio" value="35" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Comedy
        <input type="radio" value="16" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Animation
        <input type="radio" value="27" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Horror
      </div>
        <button type="submit">Search</button>
      </div>
    </form>
    <div className="SearchResults">
      <MovieResults year = {submittedYear} genre={submittedGenre} maxRuntime={submittedMaxRuntime} />
    </div>
    </div>
  );
}

export default MovieForm;
