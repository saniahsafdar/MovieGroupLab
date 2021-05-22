import { FormEvent, useState } from "react";
import MovieResults from "./MovieResults";

function MovieForm() {
  const [year, setYear] = useState(2021)
  const [submittedYear, setSubmittedYear] = useState(0)
  const [genre, setGenre] = useState(18)
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
      <h2>What do you want to watch?</h2>
      <div>
        
        <label>Select a genre: </label> <br />    
        <div className="radios">
        <label><input type="radio" value="18" name="genre" onChange={e => setGenre(Number(e.target.value))} /> Drama</label>
        <label><input type="radio" value="28" name="genre" onChange={e => setGenre(Number(e.target.value))} /> Action</label>
        <label><input type="radio" value="35" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Comedy</label>
        <label><input type="radio" value="16" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Animation</label>
        <label><input type="radio" value="27" name="genre" onChange={e => setGenre(Number(e.target.value))}/> Horror</label>
      </div>
      <p>
        <label>
          Year: <br />
          <input type="number" min="1900" value={year} onChange={e => setYear(Number(e.target.value))} />
        </label>
        </p>
        <p>
        <label>
          Max Runtime: <br />
          <input type="number" value={maxRuntime} min="0" onChange={e => setMaxRuntime(Number(e.target.value))}/>
        </label>    
        </p>
        <button type="submit">Find Movies</button>
      </div>
    </form>
    <div className="SearchResults">
      <MovieResults year = {submittedYear} genre={submittedGenre} maxRuntime={submittedMaxRuntime} />
    </div>
    </div>
  );
}

export default MovieForm;
