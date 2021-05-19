function MovieForm() {
  return (
    <form className="MovieForm">
      <h1>What to Watch</h1>
      <div>
        <label>
          Criteria 1
          <input type="text" />
        </label>
        <label>
          Criteria 2
          <input type="text" />
        </label>
        <label>
          Criteria 3
          <input type="text" />
        </label>
        <button type="submit">Search</button>
      </div>
    </form>
  );
}

export default MovieForm;
