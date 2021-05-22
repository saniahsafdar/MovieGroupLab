import { FormEvent, useState } from "react";
import MovieResults from "./MovieResults";

function MovieForm() {
  const [year, setYear] = useState("")
  const [submittedYear, setSubmittedYear] = useState("")
  const [genre, setGenre] = useState("")
  const [submittedGenre, setSubmittedGenre] = useState("")
  const [maxRuntime, setMaxRuntime] = useState("")
  const [submittedMaxRuntime, setSubmittedMaxRuntime] = useState("")

  
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
        <label><input type="radio" value="18" name="genre" onChange={e => setGenre(e.target.value)} /> Drama</label>
        <label><input type="radio" value="28" name="genre" onChange={e => setGenre(e.target.value)} /> Action</label>
        <label><input type="radio" value="35" name="genre" onChange={e => setGenre(e.target.value)}/> Comedy</label>
        <label><input type="radio" value="16" name="genre" onChange={e => setGenre(e.target.value)}/> Animation</label>
        <label><input type="radio" value="27" name="genre" onChange={e => setGenre(e.target.value)}/> Horror</label>
      </div>
      <p>
        <label>
          Year: <br />
          <input type="number" min="1900" value={year} onChange={e => setYear(e.target.value)} />
        </label>
        </p>
        <p>
        <label>
          Max Runtime: <br />
          <input type="number" value={maxRuntime} min="0" onChange={e => setMaxRuntime(e.target.value)}/>
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
