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
          Genre
          <input type="number" value={genre} onChange={e => setGenre(Number(e.target.value))}/>
        </label>
        <label>
          Maximum Runtime
          <input type="number" value={maxRuntime} onChange={e => setMaxRuntime(Number(e.target.value))}/>
        </label>
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
